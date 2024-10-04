"use client";
import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUsuario } from "@/store";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usuarios = useUsuario((state) => state.getUsuarios());
  const { updateUsuarioIniciado } = useUsuario();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usuarioValido = usuarios.filter(
      (usuario) => usuario.correo === email && usuario.contraseña === password
    );

    if (usuarioValido.length === 1 && usuarioValido[0].rol === "vendedor") {
      updateUsuarioIniciado(usuarioValido[0]);
      router.replace("/dashboard");
    } else if (
      usuarioValido.length === 1 &&
      usuarioValido[0].rol === "comprador"
    ) {
      updateUsuarioIniciado(usuarioValido[0]);
      router.replace("/buyer");
    } else {
      alert("credenciales incorrectas");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-green-700">
            Bienvenido a MerkZone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 mb-4">
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              Iniciar Sesión
            </Button>
          </form>
          <span className="text-sm">
            Nuevo Usario &nbsp;
            <Link
              href="/auth/new-account"
              className=" text-center text-sm text-green-600 hover:underline"
            >
              Registrarse
            </Link>
          </span>
        </CardContent>
      </Card>
    </div>
  );
};
