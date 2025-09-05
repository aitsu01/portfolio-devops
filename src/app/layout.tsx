import "./globals.css"
import Navbar from "./components/Navbar"

import Footer from "./components/Footer"

export const metadata = {
  title: "Portfolio Gianfranco Citovich",
  description: "Portfolio Full Stack Developer & DevOps",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <Navbar />  {/* Navbar precedentemente creata */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
