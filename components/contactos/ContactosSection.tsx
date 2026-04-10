"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CONTACTOS } from "./ContactCard"

export default function ContactosSection() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const contactoActivo = CONTACTOS[index]
  const swipeConfidenceThreshold = 100

  // ===== AUTOPLAY CADA 8s =====
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % CONTACTOS.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isPaused])

            const handleSwipe = (offsetX: number) => {
            if (offsetX > swipeConfidenceThreshold) {
              // 👉 Swipe derecha → siguiente
              setIndex((prev) => (prev + 1) % CONTACTOS.length)
            }

            if (offsetX < -swipeConfidenceThreshold) {
              // 👈 Swipe izquierda → anterior
              setIndex((prev) =>
                prev === 0 ? CONTACTOS.length - 1 : prev - 1
              )
            }
          }
                            // ===== SWIPE =====
                          {/*  const handleSwipe = (offsetX: number) => {
                            if (offsetX > swipeConfidenceThreshold) {
                              // 👉 Swipe derecha → ANTERIOR
                              setIndex((prev) =>
                                prev === 0 ? CONTACTOS.length - 1 : prev - 1
                              )
                            }

                            if (offsetX < -swipeConfidenceThreshold) {
                              // 👈 Swipe izquierda → SIGUIENTE
                              setIndex((prev) => (prev + 1) % CONTACTOS.length)
                            }
                          }
  */}
  return (
    <section
      id="contacto"
      className="min-h-screen bg-white text-black px-10 py-24 flex flex-col items-center"
    >
      {/* ===== ENCABEZADO ===== */}
      <div className="text-center max-w-2xl mb-20">
        <h2 className="text-4xl font-semibold mb-4 text-red-600">
          Nuestro equipo profesional
        </h2>

        <h3 className="text-xs uppercase tracking-widest text-black font-semibold mb-3">
          Renfert x Balsas
        </h3>

        <p className="text-black text-lg">
          Nuestro personal está siempre comprometido con brindar
          la mejor atención, asesoría clínica especializada y un
          acompañamiento cercano en cada etapa.
        </p>
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full">

        {/* ===== STACK DE TARJETAS ===== */}
        <div className="relative h-[420px] flex items-center justify-center">
          <AnimatePresence>
            {[0, 1, 2].map((i) => {
              const contact =
                CONTACTOS[(index + i) % CONTACTOS.length]

              return (
                <motion.div
                  key={contact.id}
                  className="absolute w-[280px] h-[380px] bg-white rounded-2xl shadow-xl overflow-hidden cursor-grab"
                  style={{ zIndex: 3 - i }}
                  initial={{ scale: 1 - i * 0.05, y: i * 14, opacity: 0 }}
                  animate={{ scale: 1 - i * 0.05, y: i * 14, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  drag={i === 0 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onDragStart={() => setIsPaused(true)}
                  onDragEnd={(_, info) => {
                    setIsPaused(false)
                    handleSwipe(info.offset.x)
                  }}
                >
                  <Image
                    src={contact.imagen}
                    alt={contact.nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw,
                            (max-width: 768px) 50vw,
                            (max-width: 1024px) 33vw,
                            25vw"
                  />
                  <div className="absolute bottom-0 w-full bg-neutral-400 text-white p-4 text-center font-semibold">
                    <p className="text-sm">{contact.puesto}</p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        {/* ===== TARJETA INFO ===== */}
        <motion.div
          key={contactoActivo.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-neutral-400 rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center"
        >
          <Image
             src="/logos/BalsasTrans.png"
             alt="Instagram"
             width={140}
             height={50}
          />
          <h3 className="text-2xl font-semibold mb-2 text-center text-white">
            {contactoActivo.nombre}
          </h3>
          <p className="text-white mb-6 text-center text-white">
            {contactoActivo.puesto}
          </p>
          <p className="mb-2 text-white">
                <span className="font-medium">{contactoActivo.email}</span>
          </p>
          <p className="mb-6 text-white">
                <span className="font-medium">{contactoActivo.telefono}</span>
          </p>
          {/* ===== ESTADOS (CONDICIONAL) ===== */}
          {contactoActivo.estado && (
            <div className="bg-white rounded-lg p-4 text-center w-full">
              <p className="text-xs uppercase tracking-wide text-black mb-1">
                Estados asignados
              </p>
              <p className="text-sm font-medium text-black">
                {contactoActivo.estado}
              </p>
            </div>
          )}
        </motion.div>
           {/*Aviso de privacidad*/}
      </div>
      <footer className="bg-red-600 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 ">
          <p className="text-sm text-center md:text-left maxw-xl">
            Balsas es distribuidor autorizado de Renfert, trabajando bajo convenio para ofrecer productos originales de la más alta calidad alemana.
          </p>

          <div className="flex gap-6">
            <a
            href="https://www.instagram.com/balsasdentalmx/"
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:scale-110 trasition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                   <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.493 4 20 5.507 20 7.75v8.5c0 2.243-1.507 3.75-3.75 3.75h-8.5C5.507 20 4 18.493 4 16.25v-8.5C4 5.507 5.507 4 7.75 4zm8.25 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
            </a>

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
            <div className="text-center text-xs text-white/80 mt-6">
            © {new Date().getFullYear()} Balsas. Todos los derechos reservados.
            </div>
      </footer>
    </section>
  )
}
