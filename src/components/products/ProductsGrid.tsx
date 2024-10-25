"use client";

import { CartProduct } from "@/store";
import { useState } from "react";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
  products: CartProduct[];
}

export const ProductsGrid = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    
      <input
        type="search"
        placeholder="Buscar productos..."
        className="pl-4 pr-4 py-2 mb-6 rounded-full border-2 border-black text-black appearance-none focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductGridItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
