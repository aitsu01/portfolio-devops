export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center">
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Chi sono</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Mi chiamo <span className="font-semibold">Gianni</span> e sono un 
          <span className="font-semibold"> Full Stack Developer</span> con una forte passione 
          per il mondo <span className="font-semibold">DevOps</span> e la 
          <span className="font-semibold"> Cybersecurity</span>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Amo progettare e sviluppare applicazioni web complete, curando ogni aspetto:
          dalla user experience del frontend con Next.js e TailwindCSS,
          alla logica backend con Node.js e Prisma,
          fino al deploy sicuro e scalabile su server cloud con Docker, Nginx e DigitalOcean.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Grazie alla mia formazione in cybersecurity, applico sempre un approccio 
          <span className="font-semibold"> security by design</span>, integrando buone pratiche 
          di protezione dei dati e gestione delle infrastrutture.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-12">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Scopri i miei progetti
        </a>
      </div>
    </main>
  )
}
