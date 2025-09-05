import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// POST /api/contact
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tutti i campi sono obbligatori" },
        { status: 400 }
      )
    }

    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        content: message,
      },
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
