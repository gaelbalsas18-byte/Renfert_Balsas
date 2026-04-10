"use client"

export default function Footer(){
  return(
    <footer className="bg-red-600 text-white mt-20">
      
      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* TEXTO */}
        <p className="text-sm text-center md:text-left max-w-lg leading-relaxed">
          Balsas es distribuidor autorizado de Renfert, trabajando bajo convenio para ofrecer productos originales de la más alta calidad alemana.
        </p>

        {/* REDES */}
        <div className="flex gap-6">
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/balsasdentalmx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.493 4 20 5.507 20 7.75v8.5c0 2.243-1.507 3.75-3.75 3.75h-8.5C5.507 20 4 18.493 4 16.25v-8.5C4 5.507 5.507 4 7.75 4zm8.25 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/BalsasDentalmx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M13.5 9H15V6h-1.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.5l.5-3H13v-1.5c0-.28.22-.5.5-.5z"/>
            </svg>
          </a>

        </div>
      </div>

      {/* DIVISOR */}
      <div className="border-t border-white/20"></div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-white/80 py-4">
        © {new Date().getFullYear()} Balsas. Todos los derechos reservados.
      </div>

    </footer>
  )
}