"use client";

import { QuantitySelector } from "@/components";
import Image from "next/image";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import Link from "next/link";

export const ProductsInCart = () => {
  const removeProduct = useCartStore((state) => state.removeProduct);
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const productInCart = useCartStore((state) => state.cart);
  
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {productInCart.map((product) => (
        <div className="flex mb-5" key={`${product.id}`}>
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
            <Link
              className="hover:underline cursor-pointer"
              href={`/product/${product.id}`}
            >
              {product.cantidad} - {product.nombre}
            </Link>
            <p>{product.precio}</p>
            <QuantitySelector
              quantity={product.cantidad}
              onQuantityChanged={(quantity) =>
                updateProductQuantity(product, quantity)
              }
            />
            <button
              className="underline mt-3"
              onClick={() => removeProduct(product)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
