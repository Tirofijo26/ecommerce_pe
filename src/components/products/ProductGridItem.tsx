import { currencyFormat } from "@/app/(shop)/cart/ui/currencyFormat";
import { CartProduct, useCartStore } from "@/store";
import Image from "next/image";

interface Props {
  product: CartProduct;
}

export const ProductGridItem = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductTocart);

  const addToCart = (product: CartProduct) => {
    const cartProduct: CartProduct = {
      id: product.id,
      nombre: product.nombre,
      descripcion: product.descripcion,
      precio: product.precio,
      cantidad: product.cantidad,
      image: product.image,
    };

    addProductToCart(cartProduct);
  };

  return (
    <div key={product.id} className="rounded-xl border bg-card text-card-foreground shadow flex flex-col">
      <div className="p-4">
        <Image
          width={1024}
          height={800}
          src={product.image}
          alt={product.nombre}
          className="w-full h-80 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold">{product.nombre}</h3>
        <p>{product.descripcion}</p>
        <p className="text-blue-600 font-bold">
          {currencyFormat(product.precio)}
        </p>
      </div>
      <div className="flex items-center p-6 pt-0 mt-auto">
        <button
          className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
