'use client'
import { useState } from "react";

const categories = ["Todos los productos", "Medicamentos", "Belleza", "Cuidado Personal"];


export const Sidebar = () => {
  
  const [activeCategory, setActiveCategory] = useState("Todos los productos");

  return (
    <aside className="w-64 mr-8">
      <h2 className="text-xl font-semibold mb-4">Categorías</h2>
      <nav>
        {categories.map((category) => (
          <button
            key={category}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>
    </aside>
  );
};
