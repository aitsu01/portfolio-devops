import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import authConfig from "@/app/api/auth/[...nextauth]/route"
import LogoutButton from "./LogoutButton"

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
      <section className="max-w-5xl w-full">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Messaggi ricevuti
          </h1>
          <LogoutButton />
        </div>

        {messages.length === 0 ? (
          <p className="text-gray-600 text-center">Nessun messaggio trovato.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className="p-6 border rounded-xl shadow bg-white hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-blue-600">
                  {m.name} ({m.email})
                </h2>
                <p className="text-gray-700 mt-2">{m.content}</p>
                <p className="text-sm text-gray-500 mt-4">
                  Ricevuto il {new Date(m.createdAt).toLocaleString("it-IT")}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

