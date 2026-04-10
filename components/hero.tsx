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

     {/* LOGO BALSAS */}
              <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-2 left-12 z-20 w-[120px] h-[40px]"
                    >
                      <Image
                        src="/logos/BalsasTrans.png"
                        alt="Balsas"
                        fill
                        sizes="120px"
                        className="object-contain"
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
                               className="w-20 h-auto"
                               />
                           </motion.div>

      {/* ===== CARRUSEL ===== */}
      <div className="flex w-max animate-scroll gap-2 mt-20">
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="relative h-[480px] md:h-[300px] w-auto aspect-[4/3]"
          >
            <Image
              src={src}
              alt={`img-${i}`}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

    </section>
  );
}