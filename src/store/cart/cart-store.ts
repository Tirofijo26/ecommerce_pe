import { create } from "zustand";

export interface CartProduct {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  image: string;
}

interface State {
  cart: CartProduct[];

  getTotalItems: () => number;

  addProductTocart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;
}

export const useCartStore = create<State>()((set, get) => ({
  cart: [],

  getTotalItems: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.cantidad, 0);
  },

  addProductTocart: (product: CartProduct) => {
    const { cart } = get();

    console.log(cart);

    // 1. Revisar si el producto existe en el carrito con la talla seleccionada
    const productInCart = cart.some((item) => item.id === product.id);

    if (!productInCart) {
      set({ cart: [...cart, product] });
      return;
    }

    // 2. Se que el producto existe por talla... tengo que incrementar
    const updatedCartProducts = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, cantidad: item.cantidad + product.cantidad };
      }

      return item;
    });

    set({ cart: updatedCartProducts });
  },

  updateProductQuantity: (product: CartProduct, cantidad: number) => {
    const { cart } = get();

    const updatedCartProducts = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, cantidad: cantidad };
      }
      return item;
    });
    set({ cart: updatedCartProducts });
  },

  removeProduct: (product: CartProduct) => {
    const { cart } = get();

    const updatedCartProducts = cart.filter((item) => item.id !== product.id);
    set({ cart: updatedCartProducts });
  },
}));
