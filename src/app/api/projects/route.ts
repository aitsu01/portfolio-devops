import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(projects)
  } catch (error) {
    console.error("Errore caricamento progetti:", error)
    return NextResponse.json({ error: "Errore interno" }, { status: 500 })
  }
}
