import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { checkRateLimit } from "@/lib/rateLimit"

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "global"

    // max 5 richieste al minuto per IP
    const allowed = checkRateLimit(ip, 5, 60 * 1000)
    if (!allowed) {
      return NextResponse.json(
        { error: "Troppe richieste. Riprova tra un minuto." },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tutti i campi sono obbligatori" },
        { status: 400 }
      )
    }

    const newMessage = await prisma.message.create({
      data: { name, email, content: message },
    })

    return NextResponse.json({ success: true, data: newMessage })
  } catch (error) {
    console.error("Errore API contact:", error)
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    )
  }
}
