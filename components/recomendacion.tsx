"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Recomendacion() {
  return (
    <section id="productos" className="relative bg-white text-black overflow-hidden">

      {/* ===== PRODUCTO DESTACADO ===== */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-10 pt-24 md:pt-18">

        {/* Imagen */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-72 sm:w-80 md:w-[480px]"
          >
            <div className="relative w-full h-[420px]">
              <Image
                src="/Images/Recortadoras/MTplus.jpg"
                alt="MT_plus"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 480px"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-xs sm:text-sm uppercase tracking-widest text-neutral-500 mb-3">
            Producto destacado.
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-6">
            MT plus
          </h2>

          <p className="text-base sm:text-lg text-black mb-8 leading-relaxed max-w-md">
            La MT plus es una recortadora en húmedo y en seco. Potencia pura,
            incluso el yeso más duro se desgasta con suma facilidad gracias al potente rendimiento del motor.
          </p>

          <Link href="/Catalogo">
            <button className="px-8 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300">
              VER MÁS
            </button>
          </Link>
        </div>
      </div>

      {/* ===== TARJETAS ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 mt-16 md:mt-20 pb-24">

        <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-red-600">
          Más productos Renfert.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow h-[320px] flex flex-col justify-between">

            <div className="relative w-full h-[140px]">
              <Image
                src="/Images/Vaporetas/STEAMtube.jpg"
                alt="STEAM_tube"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-semibold mb-2">
                STEAM tube
              </h4>

              <p className="text-sm text-neutral-600 line-clamp-2">
                Tan sencillo como ingenioso: el box de vaporización inteligente.
              </p>
            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow h-[320px] flex flex-col justify-between">

            <div className="relative w-full h-[140px]">
              <Image
                src="/Images/Ceras/GEOClassicazul-transparente.jpg"
                alt="Geo_Classic"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-semibold mb-2">
                GEO Classic
              </h4>

              <p className="text-sm text-neutral-600 line-clamp-2">
                Cera dura y orgánica con excelente modelado y mínima contracción.
              </p>
            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow h-[320px] flex flex-col justify-between">

            <div className="relative w-full h-[140px]">
              <Image
                src="/Images/Ceras/GEODip.jpg"
                alt="GeoDip"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-semibold mb-2">
                GEO Dip
              </h4>

              <p className="text-sm text-neutral-600 line-clamp-2">
                Cera de inmersión lista para usar con encogimiento mínimo.
              </p>
            </div>

          </div>

        </div>

        {/* BOTÓN */}
        <div className="w-full flex justify-center mt-14">
          <Link href="/Catalogo">
            <button className="px-10 py-3 border border-black tracking-wide uppercase text-sm hover:bg-black hover:text-white transition-all duration-300">
              VER MÁS
            </button>
          </Link>
        </div>
      </div>

      {/* ===== MARCO ===== */}
      <div className="hidden md:block absolute bottom-0 left-0 w-[620px] h-[440px]">
        <Image
          src="/logos/marr1.png"
          alt="Marco"
          fill
          className="object-contain"
          sizes="620px"
        />
      </div>

    </section>
  )
}