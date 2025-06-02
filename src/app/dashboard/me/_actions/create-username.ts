 "use server"

 import { z } from "zod"
 import { auth } from "@/lib/auth"
 import { prisma } from "@/lib/prisma"
import { createSlug } from "@/utils/create-slug"

 const createUserNameShema = z.object({
    username: z.string()
    .min(4, "O username precisa ter no mínimo 4 caracteres"),
 })

 type createUserNameFormData = z.infer<typeof createUserNameShema>

 export async function createUserName(data: createUserNameFormData){

    const schema = createUserNameShema.safeParse(data)

    const session = await auth()

    if(!session?.user){
        return{
            data: null,
            error: "Usuário não encontrado"
        }
    }

    if(!schema.success){
        console.log(schema)
        return{
            data: null,
            error: schema.error.issues[0].message
        }
    }
    try{
        const userId = session.user.id

        const slug = createSlug(data.username)
        // console.log(slug)

        const existSlug = await prisma.user.findUnique({
            where: {
                username: slug
            }
        })

        if(existSlug){
            return{
                data: null,
                error: "Username ja cadastrado no sistema"
            }
        }

        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                username: slug
            }
        })

        return{
            data: "Username criado com sucesso",
            error: null
        }
    }catch(err){
        return{
            data: null,
            error: "Erro ao criar username"
        }
    }
 }