"use client";

import { Title } from "@/components";
import { useCartStore, useUsuario } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { currencyFormat } from "../cart/ui/currencyFormat";
import { useState } from "react";
import { useRouter } from "next/navigation";

//* prc: crea el componente
export default function CheckoutPage() {
  const router = useRouter(); // Inicializa useRouter

  const usuario = useUsuario((state) => state.usuarioIniciado);

  const productInCart = useCartStore((state) => state.cart);

  console.log(productInCart);

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
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link className="underline mb-5" href={"/cart"}>
              Editar carrito
            </Link>

            {/* items */}
            {productInCart.map((product) => (
              <div className="flex mb-5" key={product.nombre}>
                <Image
                  className="mr-5 rounded"
                  src={`/products/${product.image}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={product.nombre}
                />
                <div>
                  <p>{product.nombre}</p>
                  <p>{product.precio} x 3</p>
                  <p className="font-bold">
                    Subtotal: ${currencyFormat(product.precio * 3)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-xl shadow-lg p-7">
            <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-2xl">{usuario.nombre}</p>
              <p>{usuario.direccion}</p>
              <p>{usuario.correo}</p>
              <p>{usuario.telefono}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">
                {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
              </span>

              <span>Subtotal</span>
              <span className="text-right">{currencyFormat(subTotal)}</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">{currencyFormat(tax)}</span>

              <span className="text-2xl mt-5">Total:</span>
              <span className="text-2xl mt-5 text-right">
                {currencyFormat(total)}
              </span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  Al hacer clic en &quot;Colocar orden &quot;, aceptas nuestros{" "}
                  <a className="underline" href="#">
                    términos y condiciones
                  </a>
                  y
                  <a className="underline" href="#">
                    política de privacidad
                  </a>
                </span>
              </p>

              <button className="flexjustify-center" onClick={pagar} >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
