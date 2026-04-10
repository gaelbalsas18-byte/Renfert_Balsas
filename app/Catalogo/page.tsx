"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { CATEGORIAS } from "../data/Categorias"
import { PRODUCTOS as EQUIPOS } from "../data/Equipos"
import { MATERIALES } from "../data/Materiales"
const PRODUCTOS = [...EQUIPOS, ...MATERIALES]


export default function Catalogo() {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
  ];
  const [categoriaActiva, setCategoriaActiva] = useState("todos")
  const [subcategoriaActiva, setSubcategoriaActiva] = useState<string | null>(null)
  const [productoActivo, setProductoActivo] = useState<any>(null)

const productosFiltrados = PRODUCTOS.filter((p) => {
  if (categoriaActiva === "todos") return true

  if (!subcategoriaActiva) {
    return p.categoria === categoriaActiva
  }

  return (
    p.categoria === categoriaActiva &&
    p.subcategoria === subcategoriaActiva
  )
})

  return (
    <main className="bg-neutral-100 text-black min-h-screen">

      {/* ================= OVERLAY SUPERIOR ================= */}
      <section className="relative h-[400px] overflow-hidden bg-red-600">
        <div className="flex w-max animate-scroll gap-2">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            className="flex h-[220px] md:h-[300px] w-auto object-contain mt-20"
          />
        ))}
        </div>
        <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex items-center max-w-6xl mx-auto px-10 top-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-red-700">
              Productos Renfert
            </h1>
            <p className="mt-4 text-black text-lg">
              Te presentamos la innovación Alemana
              <br /> en productos de alta calidad.
            </p>
          </motion.div>
        </div>
       {/* LOGO BALSAS */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute top-2 left-12 z-20"
                      >
                        <Image
                          src="/logos/BalsasTrans.png"
                          alt="Balsas"
                          width={85}
                          height={90}
                          priority
                        />
                      </motion.div>

                      {/* LOGO Renfert*/}
                      <motion.div
                      initial={{ opacity: 0, y: -10}}
                      animate={{ opacity: 1, y: 0}}
                      transition={{ duration: 0.6, ease: "easeOut"}}
                      className="absolute top-5 left-35 z-20"
                      >
                        <Image
                          src="/logos/Renfert.png"
                          alt="Renfert"
                          width={120}
                          height={100}
                          priority
                          />
                      </motion.div>
      </section>

      {/* ================= CONTENIDO ================= */}
      <section className="relative max-w-6xl mx-auto px-10 py-16">
        {/* ===== FILTROS ===== */}
        <div className="flex justify-start gap-8 mb-16 flex-wrap">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setCategoriaActiva(cat.id)
                setSubcategoriaActiva(null)
                setProductoActivo(null)
                }}
              className={`text-xs uppercase tracking-widest border-b-4 pb-2 transition-colors
                ${
                  categoriaActiva === cat.id
                    ? "border-red-700 text-black"
                    : "border-transparent text-neutral-500 hover:text-black"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

          <AnimatePresence>
          {CATEGORIAS.find(c => c.id === categoriaActiva)?.subcategorias && (
            <motion.div
              key={categoriaActiva} // 🔥 importante para animación al cambiar
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex gap-6 mb-10 flex-wrap"
            >
              {CATEGORIAS.find(c => c.id === categoriaActiva)?.subcategorias?.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => {
                    setSubcategoriaActiva(sub.id)
                    setProductoActivo(null)
                  }}
                  className={`text-xs uppercase tracking-widest border-b-2 pb-2 transition-colors
                    ${
                      subcategoriaActiva === sub.id
                        ? "border-red-700 text-black"
                        : "border-transparent text-neutral-500 hover:text-black"
                    }
                  `}
                >
                  {sub.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
    
        {/* ===== GRID GENERAL (ANIMADO) ===== */}
        <motion.div
          layout
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`grid gap-12 items-start ${
            productoActivo
              ? "grid-cols-1 lg:grid-cols-[1fr_380px]"
              : "grid-cols-1"
          }`}
        >

          {/* ===== GRID PRODUCTOS ===== */}
          <motion.div
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`grid gap-10 ${
              productoActivo
                ? "grid-cols-1 sm:grid-cols-2 justify-items-start"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 justify-items-center"
            }`}
          >
            {productosFiltrados.map((producto) => (
              <motion.div
                  layout
                  key={producto.id}
                  onClick={() => setProductoActivo(producto)}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl shadow-md p-4 w-full max-w-[260px] cursor-pointer hover:shadow-lg transition-shadow flex flex-col justify-between h-[260px]"
                >
                  {/* CONTENEDOR IMAGEN */}
                  <div className="h-[140px] flex items-center justify-center">
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      width={200}
                      height={140}
                      className="object-contain max-h-full"
                    />
                  </div>

                  {/* NOMBRE FIJO ABAJO */}
                  <h3 className="text-sm font-semibold text-center mt-4">
                    {producto.nombre}
                  </h3>
                </motion.div>
            ))}
          </motion.div>

          {/* ===== TARJETA INFO DERECHA ===== */}
          <AnimatePresence>
            {productoActivo && (
              <motion.aside
                layout
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-4 sticky top-3 h-[520px] w-[340px] flex flex-col"
              >
                                <div className="relative mb-2">
                  <button
                    onClick={() => setProductoActivo(null)}
                    className="text-neutral-400 hover:text-black"
                  >
                    ✕
                  </button>
                    {/* LOGO Renfert */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute top-7 right-24 z-20 "
                      >
                       <Image
                          src="/logos/renfert.jpg"
                          alt="Renfert"
                          width={120}
                          height={50}
                          className="w-auto h-auto"
                          priority
                        />
                      </motion.div>
                </div>

                {/* IMAGEN */}
                <div className="flex h-[160px] flex items-center justify-center mt-19">
                  <Image
                    src={productoActivo.imagen}
                    alt={productoActivo.nombre}
                    width={260}
                    height={180}
                    className="object-contain max-h-full w-auto"
                  />
                </div>

                {/* INFO (con scroll) */}
                <div className="flex-1 overflow-y-auto px-1 m-2">
                  <h3 className="text-sm font-semibold text-center mb-2">
                    {productoActivo.nombre}
                  </h3>

                  <p className="text-black text-center text-xs">
                    Código: {productoActivo.referencia}
                  </p>

                  <p className="text-neutral-700 text-center text-xs leading-relaxed mt-2">
                    {productoActivo.descripcion}
                  </p>
                </div>

                {/* BOTONES FIJOS ABAJO */}
                <div className="mt-3 space-y-2">
                  <a
                    href={productoActivo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full bg-red-700 text-white text-sm font-semibold py-2 rounded-xl hover:bg-red-600 transition-colors">
                      Adquiérelo
                    </button>
                  </a>

                  {productoActivo.pdf && (
                    <a
                      href={productoActivo.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-full border border-red-700 text-red-700 text-sm font-semibold py-2 rounded-xl hover:bg-red-700 hover:text-white transition-colors mt-2">
                        Ficha Técnica
                      </button>
                    </a>
                  )}
                </div>
           </motion.aside>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  )
}
