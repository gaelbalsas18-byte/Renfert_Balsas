"use client"

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

        {/* ===== REDES SOCIALES ===== */}
        <div className="flex items-center gap-6">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/BalsasDentalmx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M13.5 9H15V6h-1.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.5l.5-3H13v-1.5c0-.28.22-.5.5-.5z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/balsasdentalmx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.493 4 20 5.507 20 7.75v8.5c0 2.243-1.507 3.75-3.75 3.75h-8.5C5.507 20 4 18.493 4 16.25v-8.5C4 5.507 5.507 4 7.75 4zm8.25 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/525584494688"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.94 11.94 0 0012.01 0C5.38 0 .02 5.36.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62A11.94 11.94 0 0012.01 24c6.63 0 11.99-5.36 11.99-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.82c-1.85 0-3.65-.5-5.22-1.45l-.37-.22-3.68.96.98-3.58-.24-.37A9.77 9.77 0 012.23 12c0-5.4 4.39-9.79 9.79-9.79s9.79 4.39 9.79 9.79-4.39 9.82-9.81 9.82zm5.43-7.34c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.61.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
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