
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      {/* Hero section */}
      <section className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Ciao, sono Gianni 👋
        </h1>
        <h2 className="text-2xl text-gray-700 mb-6">
          Full Stack Developer · DevOps · Cybersecurity Enthusiast
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Sviluppo applicazioni web moderne e sicure, con un approccio end-to-end:
          dal frontend con <span className="font-semibold">Next.js e TailwindCSS</span>, 
          al backend con <span className="font-semibold">Node.js, Prisma e PostgreSQL</span>, 
          fino al deploy su infrastrutture cloud gestite in autonomia con 
          <span className="font-semibold"> DigitalOcean, Docker e Nginx</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Scopri i miei progetti
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Chi sono
          </a>
        </div>
      </section>

      {/* Skills section */}
      <section className="mt-20 mb-20 grid gap-8 sm:grid-cols-2 max-w-4xl">
        <div className="p-6 border rounded-xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Frontend</h3>
          <p className="text-gray-600">Next.js, React, TailwindCSS</p>
        </div>
        <div className="p-6 border rounded-xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2 text-blue-600 ">Backend</h3>
          <p className="text-gray-600">Node.js, Prisma, REST API</p>
        </div>
        <div className="p-6 border rounded-xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Database</h3>
          <p className="text-gray-600">PostgreSQL, Prisma ORM</p>
        </div>
        <div className="p-6 border rounded-xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">DevOps & Security</h3>
          <p className="text-gray-600">Docker, Nginx, DigitalOcean, Cybersecurity</p>
        </div>
      </section>


    </main>
  )
}

