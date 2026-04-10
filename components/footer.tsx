"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

        {/* ===== REDES SOCIALES ===== */}
        <div className="flex items-center gap-5">
          <a href="https://www.facebook.com/BalsasDentalmx" target="_blank">
            <Image src="/Redes/Facebook.png" alt="Facebook" width={28} height={28}/>
          </a>

          <a href="https://www.instagram.com/balsasdentalmx/" target="_blank">
            <Image src="/Redes/Instagram.png" alt="Instagram" width={28} height={28}/>
          </a>

          <a href="https://wa.me/525584494688" target="_blank">
            <Image src="/Redes/Whatsapp.png" alt="WhatsApp" width={28} height={28}/>
          </a>
        </div>

        {/* ===== TEXTO LEGAL ===== */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-right">
          <p>
            © {new Date().getFullYear()} Balsas Dental · Renfert. Todos los derechos reservados.
          </p>

    
        </div>
      </div>
    </footer>
  )
}
