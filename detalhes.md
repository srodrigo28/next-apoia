#### Start Project

#### Sequência
> * start 9min
> * 1. prisma
> * 2. auth github
> * 3. proteger rotas

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


> #### Prisma Adapter 17:40

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