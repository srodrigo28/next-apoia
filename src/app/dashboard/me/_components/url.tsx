'use client'
import { Button } from "@/components/ui/button";
import { createUserName } from "../_actions/create-username";
import { useState } from "react";

export function UrlPreview(){
    const [error, setError] = useState<null | string>(null)

    async function submitAction( formData: FormData){
        const username = formData.get("username") as string
        
        if(username == ""){
            alert('Digite um username')
            return
        }

        const response = await createUserName({username})

        if(response!.error){
            setError(response!.error)
        }
    }
    return(
       <div className="">
         <form action={submitAction} className="flex gap-2 flex-1 flex-col md:flex-row">
            <div className="flex items-center justify-start w-full">
                <p  className="w-fit text-sm md:text-md h-9 rounded-md flex items-center font-semibold text-white" >
                    {process.env.NEXT_PUBLIC_HOST_URL}/creator/
                </p>
                <input type="text" 
                    name="username"
                    placeholder="username"
                    className="flex-1 w-full ml-1 px-2 outline-none border h-9 
                    rounded-md border-gray-300 text-zinc-300 tracking-wide" 
                />
            </div>
            <Button type="submit" className="bg-blue-500 h-7 md:h-9 w-full mt-3 md:mt-0 md:w-fit text-white px-4 rounded-md cursor-pointer hover:bg-blue-700">
                Salvar
            </Button>
            
        </form>
        <div className="block w-full">
            {error && <p className="text-red-500 p-2">{error}</p>}
        </div>
       </div>
    )
}