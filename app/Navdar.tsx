"use client";

import { useState } from "react";

export default function MenuRenfert() {
  const [active, setActive] = useState("Seleccion");

  const menuItems = [
    { name: "Inicio", id: "productos" },
    { name: "Selección", id: "seleccion" },
    { name: "Distribución", id: "distribuidores" },
    { name: "Contactos", id: "contacto" },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center gap-5 px-3 py-2 rounded-full 
        bg-white/70 backdrop-blur-xl shadow-lg border border-white/30">

        {/* Indicador deslizante */}
        <div
          className={`absolute top-1 bottom-1 rounded-full bg-red-600 transition-all duration-300`}
          style={{
            width: `${85 / menuItems.length}%`,
            left: `${menuItems.findIndex(i => i.id === active) * (100 / menuItems.length)}%`
          }}
        />

        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`relative z-10 px-4 py-1 text-sm font-medium transition-colors duration-300
              ${active === item.id ? "text-white" : "text-gray-800 hover:text-red-600"}
            `}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}