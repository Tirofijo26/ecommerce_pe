import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSumary } from "./ui/OrderSumary";
import { Title } from "@/components";

export default function CartPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Title title="Carrito" className="text-3xl font-bold text-gray-900 mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carrito */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <span className="text-xl font-semibold text-gray-900">Agregar más items</span>
              <Link className="text-green-600 hover:text-green-700 underline block mb-6" href="/buyer">
                Continúa comprando
              </Link>

              {/* items */}
              <ProductsInCart />
            </div>
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resumen de orden</h2>

            <OrderSumary />

            <div className="mt-6">
              <Link
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-150 ease-in-out flex items-center justify-center"
                href="/checkout"
              >
                Enviar Orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}