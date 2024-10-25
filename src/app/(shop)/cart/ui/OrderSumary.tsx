"use client";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import { currencyFormat } from "./currencyFormat";

export const OrderSumary = () => {
  const [loaded, setLoaded] = useState(false);
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

 

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Loading...</p>;

  return (
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
      <span className="text-2xl mt-5 text-right">{currencyFormat(total)}</span>
    </div>
  );
};
