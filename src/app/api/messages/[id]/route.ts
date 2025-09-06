import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.message.delete({
      where: { id: Number(params.id) },
    })
    return NextResponse.json({ success: true, message: "Messaggio eliminato" })
  } catch (error) {
    console.error("Errore eliminazione messaggio:", error)
    return NextResponse.json({ error: "Errore interno" }, { status: 500 })
  }
}
