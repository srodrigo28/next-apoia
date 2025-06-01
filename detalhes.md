#### Start Project

#### Sequência
> * start 9min
> * 1. auth
> * 2. prisma 17 ao 27
> * 3. prisma.ts model 27 ao 42
> * 4. prisma.ts model 27 ao 39


> #### Authjs
https://authjs.dev/getting-started/installation?framework=Next.js
```
npm install next-auth@beta
```

```
npx auth secret
```

* criar na pasta lib/auth.ts
```
import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
```

* Adapter GitHub a
```
https://authjs.dev/getting-started/providers/github
```

``` callback no github confi inter e externo
http://localhost:3000/api/auth/callback/github
https://example.com/api/auth/callback/github
```

* Environment Variables
```
AUTH_GITHUB_ID
AUTH_GITHUB_SECRET
```

* chave gerada
```
Ov23liI9tp3V4g9SqVIf
```

* KEY GERADA
```
ceda8cac651525d0322c5c1b4f09d86a9274351b
```

> * Add a Route Handler under /app/api/auth/[...nextauth]/route.ts

```
import { handlers } from "@/auth" // lib Referring to the auth.ts we just created
export const { GET, POST } = handlers
```


> #### 1 Prisma Adapter 17:40
```
npm install prisma --save-dev
```

```
npm install @prisma/client @auth/prisma-adapter
```

* Criar a pasta Prisma
```
npx prisma init
```

* Gera a conexão com o prisma
```
npx prisma generate
```

> #### 2 Prisma lib/prisma.ts
```
import { PrismaClient } from "@/generated/prisma/client"
 
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
```

> #### 3 Prisma lib/auth.ts
```
import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma" // arquivo criado
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Github],
})
```

> #### 4 Prisma prisma/schema-postgres.prisma
```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
 
generator client {
  provider = "prisma-client-js"
}
 
model User {
  id            String          @id @default(cuid())
  name          String?
  email         String          @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  // Optional for WebAuthn support
  Authenticator Authenticator[]
 
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
 
model Account {
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
 
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
 
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
 
  @@id([provider, providerAccountId])
}
 
model Session {
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
 
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
 
model VerificationToken {
  identifier String
  token      String
  expires    DateTime
 
  @@id([identifier, token])
}
 
// Optional for WebAuthn support
model Authenticator {
  credentialID         String  @unique
  userId               String
  providerAccountId    String
  credentialPublicKey  String
  counter              Int
  credentialDeviceType String
  credentialBackedUp   Boolean
  transports           String?
 
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
 
  @@id([userId, credentialID])
}
```

> #### 5 Prisma Gerando as tabelas
```
npx prisma migrate dev --name first-tables
```

> #### 5.1 Prisma Opcional Prisma studio
```
npx prisma studio
```

> #### 5.2 Prisma format
```
npx prisma format
```

#### Detalhes 
início do projeto 8min

#### Dependências

> * 1. auth
> * 1. prisma

#### AI
* windsurf

* copilot
```
https://www.youtube.com/watch?v=oC4sXvg0Ci8
```

#### Complementar