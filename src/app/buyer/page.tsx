"use client";
import { useState } from "react";
import { Search, ShoppingCart, User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation"; // Importa useRouter

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CartProduct, useCartStore, useUsuario } from "@/store";
import { currencyFormat } from "../cart/ui/currencyFormat";
import Image from "next/image";

const categories = ["Todos los productos", "Electrónica", "Ropa", "Hogar"];
const products = [
  {
    id: 1,
    nombre: "Camisa Oversize",
    cantidad: 1,
    precio: 20000,
    image:
      "https://trueshop.co/cdn/shop/files/camiseta_oversized_cuello_tejido_negra_1.jpg?v=1703195418",
  },
  {
    id: 2,
    nombre: "Televisores",
    cantidad: 1,
    precio: 2000000,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121755628_01/w=1500,h=1500,fit=pad",
  },
  {
    id: 3,
    nombre: "Mesa de noche",
    cantidad: 1,
    precio: 200000,
    image:
      "https://tugocolombia.vteximg.com.br/arquivos/ids/215161/6177213-2.jpg",
  },
  {
    id: 4,
    nombre: "Impresoras",
    cantidad: 1,
    precio: 600000,
    image:
      "https://mediaserver.goepson.com/ImConvServlet/imconv/61dcb6a700968d5fe27870dc9e72d7151805d623/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=L8050_aberta",
  },
  {
    id: 5,
    nombre: "Calzados",
    cantidad: 1,
    precio: 15000,
    image:
      "https://i3.wp.com/media.aldoshoes.com/v3/product/zale/220-001-043/zale_brown_220-001-043_alt1_sq_nt_1000x1000.jpg?ssl=1",
  },
  {
    id: 6,
    nombre: "Bolsos",
    cantidad: 1,
    precio: 12000,
    image:
      "https://elaco.vteximg.com.br/arquivos/ids/670034-1000-1464/-elaco-producto-Bolsosycarteras-FUCSIA-E411866-1.jpg?v=638327278624970000",
  },
  {
    id: 7,
    nombre: "Carteras",
    cantidad: 1,
    precio: 70000,
    image:
      "https://cdnx.jumpseller.com/urbenmood/image/45356295/PS917_Billetera_Clip_Hombre_Cuero_Sintetico_-_Color_Negro_Cafe.jpeg?1707442486",
  },
  {
    id: 8,
    nombre: "Juguetes",
    cantidad: 1,
    precio: 50000,
    image:
      "https://exitocol.vtexassets.com/arquivos/ids/14997473/MUNECAS-GRANDES-BOING-TOYS-3299514_b.jpg?v=638006066767830000",
  },
  {
    id: 9,
    nombre: "Figuras de acción",
    cantidad: 1,
    precio: 60000,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_868773-MCO76184153102_052024-O.webp",
  },
  {
    id: 10,
    nombre: "Maquillaje",
    cantidad: 1,
    precio: 100000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuULFAx_Vx-TvKSZTEfZY9P9Bgizr5OeydP9W6EBwYQ&s",
  },
];

export default function BuyerHomepage() {
  const addProductToCart = useCartStore((state) => state.addProductTocart);

  const { usuarioIniciado } = useUsuario();
  const router = useRouter(); // Inicializa useRouter

  const [activeCategory, setActiveCategory] = useState("Todos los productos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: CartProduct) => {
    const cartProduct: CartProduct = {
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      cantidad: product.cantidad,
      image: product.image,
    };

    addProductToCart(cartProduct);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MerkZone</h1>
          <div className="flex items-center space-x-4">
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="pl-10 pr-4 py-2 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </form>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.replace("/profile")}
            >
              <User size={24} />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart size={24} onClick={() => router.replace("/cart")} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/")}
            >
              {" "}
              {/* Redirige a la página de inicio */}
              <LogOut size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 flex">
        <aside className="w-64 mr-8">
          <h2 className="text-xl font-semibold mb-4">Categorías</h2>
          <nav>
            {categories.map((category) => (
              <button
                key={category}
                className={`block w-full text-left px-4 py-2 rounded ${
                  activeCategory === category
                    ? "bg-green-600 text-white"
                    : "hover:bg-green-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>
        </aside>

        <section className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <CardContent className="p-4">
                  <img
                    // width={100}
                    // height={100}
                    src={product.image}
                    alt={product.nombre}
                    className="w-full h-80 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.nombre}</h3>
                  <p className="text-green-600 font-bold">
                    {currencyFormat(product.precio)}
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full" onClick={() => addToCart(product)}>
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 text-center p-4 mt-8">
        <p>&copy; 2023 MerkZone. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
