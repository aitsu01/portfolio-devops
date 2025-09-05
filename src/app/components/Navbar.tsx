export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-center gap-6 fixed top-0 left-0 z-50">
      <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
        Home
      </a>
      <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
        About
      </a>
      <a href="/projects" className="text-gray-700 hover:text-blue-600 font-medium">
        Projects
      </a>
      <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
        Contact
      </a>
    </nav>
  )
}
