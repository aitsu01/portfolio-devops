import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/messages
export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(messages)
  } catch (error) {
    console.error("Errore API /api/messages:", error)
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    )
  }
}
