"use client"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-5 mt-11 border-t border-gray-200">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Colonna 1: Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Seguimi</h3>
          <div className="flex justify-center md:justify-start space-x-6">

            <a
              href="https://github.com/aitsu01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition transform hover:scale-110"
            >
              <FaGithub className="text-gray-800 hover:text-black text-3xl" />
            </a>



            <a
              href="https://www.linkedin.com/in/aitsu01-full-stuck-developer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition transform hover:scale-110"
            >
              <FaLinkedin className="text-blue-600 hover:text-blue-800 text-3xl" />
            </a>


            <a
              href="https://www.instagram.com/giannicitovich/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition transform hover:scale-110"
            >
              <FaInstagram className="text-pink-500 hover:text-pink-700 text-3xl" />
            </a>


          </div>
        </div>

        {/* Colonna 2: Mappa del sito */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Mappa del sito</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-blue-600">Chi sono</a></li>
            <li><a href="/projects" className="text-gray-600 hover:text-blue-600">Progetti</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-blue-600">Contatti</a></li>
            <li><a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Colonna 3: Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-600 ">Info</h3>
          <p className="text-gray-600">
            © {new Date().getFullYear()} Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}




