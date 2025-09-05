"use client"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function AdminMessagesPage() {
  const { data, error } = useSWR("/api/messages", fetcher)

  if (error) return <div className="p-10 text-red-600">Errore nel caricamento</div>
  if (!data) return <div className="p-10">Caricamento...</div>

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center">
      <section className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
          Messaggi ricevuti
        </h1>

        {data.length === 0 ? (
          <p className="text-gray-600 text-center">Nessun messaggio trovato.</p>
        ) : (
          <div className="space-y-4">
            {data.map((m: any) => (
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
