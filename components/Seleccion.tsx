"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const DURACION_TOTAL = 10

const BENEFICIOS = [
  {
    icono: "⚙️",
    titulo: "Presicion Alemana",
    descripcion:
      "Equipos diseñados para resultados exactos y consistentes en cada uso.",
  },
  {
    icono: "⚡",
    titulo: "Durabilidad",
    descripcion:
      "Materiales de alta calidad que garantizan una larga vida útil.",
  },
  {
    icono: "🧼",
    titulo: "Higiene",
    descripcion:
      "Procesos más limpios que mejoran la experiencia en el laboratorio.",
  },
  {
    icono: "⏱",
    titulo: "Ahorra tiempo",
    descripcion:
      "Optimiza tu flujo de trabajo y reduce tiempos operativos.",
  },
]

export default function Seleccion() {
  const [activo, setActivo] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActivo((prev) => (prev + 1) % BENEFICIOS.length)
    }, (DURACION_TOTAL * 1000) / BENEFICIOS.length)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">

        {/* TITULO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-4 text-red-600"
        >
          ¿Por qué elegir Renfert?
        </motion.h2>

        <h3 className="text-xs uppercase tracking-widest text-black font-semibold mb-3">
          Renfert x Balsas
        </h3>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {BENEFICIOS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-neutral-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all overflow-hidden h-[200px] flex flex-col justify-between"
            >
              {/*LUZ*/}
              <div
                className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-600/100 to-transparent pointer-events-none transition-none ${
                  activo === index ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* CONTENIDO */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{item.icono}</div>

                <h3 className="font-semibold mb-2 text-black">
                  {item.titulo}
                </h3>

                <p className="text-sm text-neutral-600">
                  {item.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}