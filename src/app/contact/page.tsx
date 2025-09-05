"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSubmitted(true)
        setForm({ name: "", email: "", message: "" })

        // redirect alla home dopo 2 secondi
        setTimeout(() => {
          router.push("/")
        }, 2000)
      } else {
        const errorData = await res.json()
        alert("Errore: " + errorData.error)
      }
    } catch (err) {
      console.error(err)
      alert("Errore di connessione al server")
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center">
      <section className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Contattami
        </h1>

        {!submitted ? (
          
          
         <form
  onSubmit={handleSubmit}
  className="bg-white shadow-lg rounded-xl p-8 space-y-6"
>
  <div>
    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
      Il tuo nome
    </label>
    <input
      id="name"
      type="text"
      name="name"
      placeholder="Inserisci il tuo nome"
      value={form.name}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-900"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
      La tua email
    </label>
    <input
      id="email"
      type="email"
      name="email"
      placeholder="Inserisci la tua email"
      value={form.email}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-900"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
      Messaggio
    </label>
    <textarea
      id="message"
      name="message"
      placeholder="Scrivi il tuo messaggio..."
      value={form.message}
      onChange={handleChange}
      required
      rows={5}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-900"
    />
  </div>

  <button
    type="submit"
    className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
  >
    Invia
  </button>
</form>


        ) : (
          <div className="text-center bg-green-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Grazie!</h2>
            <p className="text-gray-700">
              Il tuo messaggio è stato salvato con successo. Verrai reindirizzato
              alla Home...
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
