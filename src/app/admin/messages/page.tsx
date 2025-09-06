import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import authConfig from "@/app/api/auth/[...nextauth]/route"
import LogoutButton from "./LogoutButton"
import MessageTable from "./MessageTable"

export default async function AdminMessagesPage() {
  const session = await getServerSession(authConfig)

  if (!session) {
    redirect("/admin/login")
  }

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center">
      <section className="max-w-6xl w-full">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Messaggi ricevuti</h1>
          <LogoutButton />
        </div>

        {messages.length === 0 ? (
          <p className="text-gray-600 text-center">Nessun messaggio trovato.</p>
        ) : (
          <MessageTable messages={messages} />
        )}
      </section>
    </main>
  )
}
