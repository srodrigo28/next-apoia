'use client'
import { Button } from "@/components/ui/button";

export function UrlPreview(){
    async function submitAction( formData: FormData){
        const username = formData.get("username") as string
        
        if(username == ""){
            return
        }

        console.log('peguei: ', username)
    }
    return(
       <div className="flex items-center flex-1 p-2 text-gray-100 md:max-w-[500px]">
         <form action={submitAction} className="flex flex-1 flex-col md:flex-row">
            <div className="flex items-center justify-start w-full">
                <p  className="w-fit text-sm md:text-md h-9 rounded-md flex items-center font-semibold text-white" >
                    {process.env.NEXT_PUBLIC_HOST_URL}/creator/
                </p>
                <input type="text" 
                    name="username"
                    placeholder="username"
                    className="flex-1 max-w-24 ml-1 md:max-w-[200px] px-2 outline-none border h-9 
                    rounded-md border-gray-300 text-zinc-300 tracking-wide" 
                />
            </div>
            <Button type="submit" className="bg-blue-500 h-7 md:h-9 w-full mt-3 md:mt-0 md:w-fit text-white px-4 rounded-md cursor-pointer hover:bg-blue-700">
                Salvar
            </Button>
        </form>
       </div>
    )
}