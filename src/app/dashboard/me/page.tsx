import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { UrlPreview } from "./_components/url";

export default async function Me() {
   const session = await auth();

    if(!session?.user){ redirect("/") }

    const userData = {
      id: session.user.id,
      bio: session.user.bio  || null,
      name: session.user?.name || null,
      email: session.user.email  || null,
      image: session.user.image  || null,
      userName: session.user.userName  || null,
    }

  return (
    <main className="w-full h-full flex gap-4 flex-col items-center p-4">
      <section
        className="w-full flex lg:flex-row flex-col lg:items-center mx-auto bg-zinc-900 rounded-md p-4 gap-2"
      >
        <UrlPreview />
      </section>


    </main >
  )
}