"use client";
import { useUsuario } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdCalendarToday, MdMailOutline } from "react-icons/md";

export default function UserDetail() {
  const router = useRouter();

  const { usuarioIniciado } = useUsuario();

  const handleBack = () => {
    if (usuarioIniciado.rol === "comprador") {
      router.replace("/");
    } else {
      router.replace("/seller");
    }
  };

  useEffect(() => {
    if (
      usuarioIniciado.rol === "comprador" ||
      usuarioIniciado.rol === "vendedor"
    ) {
      return;
    } else {
      router.replace("/auth/login");
    }
  }, [usuarioIniciado]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto rounded-xl border bg-card text-card-foreground shadow">
        <div className="pb-0 flex flex-col space-y-1.5 p-6">
          <div className="flex items-center space-x-4">
            <div>
              <div className="text-2xl font-bold leading-none tracking-tight">
                {usuarioIniciado.nombre}
              </div>
              <p className="text-sm text-muted-foreground">
                {usuarioIniciado.rol}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 p-6 pt-0">
          <div className="grid gap-2">
            <label className="font-semibold text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Correo Electrónico
            </label>
            <div className="flex items-center space-x-2 text-sm">
              <MdMailOutline className="h-4 w-4 text-muted-foreground" />
              <span>{usuarioIniciado.correo}</span>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Teléfono
            </label>
            <div className="flex items-center space-x-2 text-sm">
              <FaPhoneAlt className="h-4 w-4 text-muted-foreground" />
              <span>{usuarioIniciado.telefono}</span>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Dirección
            </label>
            <div className="flex items-center space-x-2 text-sm">
              <LuMapPin className="h-4 w-4 text-muted-foreground" />
              <span>{usuarioIniciado.direccion}</span>
            </div>
          </div>

          <div className="grid gap-2">
            <label className="font-semibold text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Fecha de Registro
            </label>
            <div className="flex items-center space-x-2 text-sm">
              <MdCalendarToday className="h-4 w-4 text-muted-foreground" />
              <span>{usuarioIniciado.fechaRegistro}</span>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-6 ">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 bg-blue-600"
              onClick={handleBack}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
