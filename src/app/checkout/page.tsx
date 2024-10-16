'use client';

import { Title } from "@/components";
import { useCartStore, useUsuario } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { currencyFormat } from "../cart/ui/currencyFormat";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const usuario = useUsuario((state) => state.usuarioIniciado);
  const productInCart = useCartStore((state) => state.cart);

  const subTotal = productInCart.reduce(
    (subTotal, product) => product.cantidad * product.precio + subTotal,
    0
  );
  const tax = subTotal * 0.15;
  const total = subTotal + tax;
  const itemsInCart = productInCart.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  const pagar = () => {
    alert('Pago realizado')
    router.replace('buyer')
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Title title="Verificar orden" className="text-3xl font-bold text-gray-900 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carrito */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <span className="text-xl font-semibold text-gray-900">Ajustar elementos</span>
              <Link className="text-green-600 hover:text-green-700 underline block mb-6" href="/cart">
                Editar carrito
              </Link>

              {/* items */}
              {productInCart.map((product) => (
                <div className="flex items-center mb-6 pb-6 border-b border-gray-200" key={product.nombre}>
                  <Image
                    className="rounded-md mr-4"
                    src={product.image}
                    width={80}
                    height={80}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover"
                    }}
                    alt={product.nombre}
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{product.nombre}</p>
                    <p className="text-gray-600">{`${currencyFormat(product.precio)} x ${product.cantidad}`}</p>
                    <p className="font-bold text-gray-900">
                      Subtotal: {currencyFormat(product.precio * product.cantidad)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dirección de entrega</h2>
            <div className="mb-6">
              <p className="text-lg font-medium text-gray-800">{usuario.nombre}</p>
              <p className="text-gray-600">{usuario.direccion}</p>
              <p className="text-gray-600">{usuario.correo}</p>
              <p className="text-gray-600">{usuario.telefono}</p>
            </div>

            <div className="w-full h-px bg-gray-200 my-6" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resumen de orden</h2>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <span>No. Productos</span>
              <span className="text-right font-medium">
                {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
              </span>

              <span>Subtotal</span>
              <span className="text-right font-medium">{currencyFormat(subTotal)}</span>

              <span>Impuestos (15%)</span>
              <span className="text-right font-medium">{currencyFormat(tax)}</span>

              <span className="text-xl font-semibold text-gray-900 mt-4">Total:</span>
              <span className="text-xl font-semibold text-gray-900 mt-4 text-right">
                {currencyFormat(total)}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-4">
                Al hacer clic en &quot;Pagar&quot;, aceptas nuestros{" "}
                <a className="text-green-600 hover:text-green-700 underline" href="#">
                  términos y condiciones
                </a>{" "}
                y{" "}
                <a className="text-green-600 hover:text-green-700 underline" href="#">
                  política de privacidad
                </a>
              </p>

              <button
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-150 ease-in-out"
                onClick={pagar}
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}