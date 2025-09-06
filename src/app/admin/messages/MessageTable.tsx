"use client"
import { useState } from "react"
import DeleteButton from "./DeleteButton"


export default function MessageTable({ messages }: { messages: any[] }) {
  const [query, setQuery] = useState("")

  const filtered = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.email.toLowerCase().includes(query.toLowerCase()) ||
      m.content.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="🔍 Cerca per nome, email o messaggio"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 px-3 py-2 border rounded-lg w-full text-gray-900"
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow rounded-xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border text-gray-900">Nome</th>
              <th className="px-4 py-2 border text-gray-900">Email</th>
              <th className="px-4 py-2 border text-gray-900">Messaggio</th>
              <th className="px-4 py-2 border text-gray-900">Data</th>
              <th className="px-4 py-2 border text-gray-900">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m) => (
              <tr key={m.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium text-blue-600">{m.name}</td>
                <td className="px-4 py-2 border text-blue-600">{m.email}</td>
                <td className="px-4 py-2 border text-blue-600">{m.content}</td>
                <td className="px-4 py-2 border text-sm text-blue-600">
                  {new Date(m.createdAt).toLocaleString("it-IT")}
                </td>

                <td className="px-4 py-2 border text-center text-gray-600">
                    <DeleteButton id={m.id} />
                </td>



                

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
