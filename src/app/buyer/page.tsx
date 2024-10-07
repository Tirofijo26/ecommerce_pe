'use client'
import { useState } from 'react'
import { Search, ShoppingCart, User, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'; // Importa useRouter

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useUsuario } from '@/store'

const categories = ["Todos los productos", "Electrónica", "Ropa", "Hogar"]
const products = [
  { id: 1, name: "Producto 1", price: 99.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Producto 2", price: 149.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Producto 3", price: 79.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Producto 4", price: 129.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Producto 5", price: 89.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Producto 6", price: 199.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function BuyerHomepage() {
  const {usuarioIniciado} = useUsuario()
  const router = useRouter();  // Inicializa useRouter
  
  const [activeCategory, setActiveCategory] = useState("Todos los productos")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </form>
            <Button variant="ghost" size="icon">
              <User size={24} />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart size={24} />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => router.push('/')}> {/* Redirige a la página de inicio */}
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
                  activeCategory === category ? 'bg-green-600 text-white' : 'hover:bg-green-100'
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
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full">Agregar al carrito</Button>
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
  )
}
