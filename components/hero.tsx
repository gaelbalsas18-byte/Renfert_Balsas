"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
  ];

  return (
    <section className="relative overflow-hidden py-3 bg-red-700">

               {/*Logos*/}
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

      {/* ===== CARRUSEL ===== */}
      <div className="flex w-max animate-scroll gap-2">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            className="flex h-[220px] md:h-[300px] w-auto object-contain mt-20"
          />
        ))}
        </div>
    </section>
  );
}