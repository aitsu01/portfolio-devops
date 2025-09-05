import { prisma } from "@/lib/prisma"

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  })

  if (projects.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-xl">Nessun progetto trovato nel database.</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center">
      <section className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
          I miei Progetti
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.id}
              className="p-6 border rounded-xl shadow bg-white hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2 text-blue-600">{p.title}</h2>
              <p className="text-gray-700 mb-4">{p.desc}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Vai al progetto →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
