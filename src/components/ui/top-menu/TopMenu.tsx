"use client";
import Link from "next/link";
import { RiUser3Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { useCartStore, useUsuario } from "@/store";
import { useState } from "react";

export const TopMenu = () => {
  const totatlItemsInCart = useCartStore((state) => state.getTotalItems());

  const [logOut, setLogOut] = useState(false);
  const { updateUsuarioIniciado, usuarioIniciado } = useUsuario();

  const handleLogOut = () => {
    updateUsuarioIniciado({
      nombre: "",
      correo: "",
      telefono: "",
      direccion: "",
      contraseña: "",
      rol: "",
      fechaRegistro: "",
    });

    setLogOut(true);

    setTimeout(() => {
      setLogOut(false);
    }, 3000);
  };

  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MerkZone</h1>
        <div className="flex items-center space-x-4 pr-4">
          <Link href="/profile">
            <RiUser3Line size={28} />
          </Link>

          <div className="relative">
            {totatlItemsInCart > 0 && (
              <span className="fade-in absolute text-xs rounded-full px-1 font-bold -top-3 -right-2 bg-white text-green-600">
                {totatlItemsInCart}
              </span>
            )}
            <Link href="/cart">
              <FiShoppingCart size={24} />
            </Link>
          </div>
          {usuarioIniciado.rol === "comprador" ||
          usuarioIniciado.rol === "vendedor" ? (
            <button onClick={handleLogOut}>
              <IoLogOutOutline size={28} />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {logOut === true ? (
        <div className="absolute bottom-6 right-10 max-w-sm rounded-lg border p-6 shadow-lg bg-white">
          <h2 className="text-xl font-semibold text-gray-700">
            👍 Sesion cerrada
          </h2>
          <p className="mb-4 mt-2 text-gray-400">
            We use our own and third party cookies to improve your experience
            and our services by analyzing how you use our website.
          </p>
          <div className="text-right">
            <button
              className="text-md inline-block rounded-lg px-4 py-1 text-right font-semibold text-blue-500 transition duration-500 hover:bg-blue-100"
              onClick={() => setLogOut(false)}
            >
              Accept
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};
