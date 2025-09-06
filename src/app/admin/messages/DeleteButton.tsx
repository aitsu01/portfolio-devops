"use client"

import { useRouter } from "next/navigation"

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm("Sei sicuro di voler eliminare questo messaggio?")) return

    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: "POST",
      })

      if (res.ok) {
        const data = await res.json()
        alert(data.message) // mostra "Messaggio eliminato"
        router.refresh() // ricarica la pagina e aggiorna la tabella
      } else {
        alert("Errore durante l'eliminazione")
      }
    } catch (error) {
      console.error(error)
      alert("Errore di connessione al server")
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
    >
      Elimina
    </button>
  )
}
