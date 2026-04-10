"use client"

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

        {/* ===== REDES ===== */}
        <div className="flex items-center gap-6">

          {/* Facebook */}
          <a href="https://www.facebook.com/BalsasDentalmx" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-red-700 transition">
            <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M15 3h-3a5 5 0 00-5 5v3H4v4h3v6h4v-6h3l1-4h-4V8a1 1 0 011-1h3z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/balsasdentalmx/" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-red-700 transition">
            <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17" cy="7" r="1.5"/>
            </svg>
          </a>
        </div>

        {/* ===== TEXTO ===== */}
        <div className="text-center md:text-right">
          <p>
            © {new Date().getFullYear()} Balsas Dental · Renfert. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  )
}