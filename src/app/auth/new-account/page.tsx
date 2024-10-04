"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegisterForm() {
  const [userType, setUserType] = useState("buyer");
  const [showSellerFields, setShowSellerFields] = useState(false);

  const handleUserTypeChange = (value: string) => {
    setUserType(value);
    setShowSellerFields(value === "seller");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica de registro
    console.log("Formulario enviado");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-green-700">
            Registro en MerkZone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Select onValueChange={handleUserTypeChange} defaultValue="buyer">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tipo de usuario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buyer">Comprador</SelectItem>
                <SelectItem value="seller">Vendedor</SelectItem>
              </SelectContent>
            </Select>

            <Input type="text" placeholder="Nombre completo" required />
            <Input type="email" placeholder="Correo electrónico" required />
            <Input type="password" placeholder="Contraseña" required />
            <Input
              type="password"
              placeholder="Confirmar contraseña"
              required
            />

            {showSellerFields && (
              <div className="space-y-4">
                <Input type="text" placeholder="Nombre de la empresa o marca" />
                <Input type="text" placeholder="NIF/CIF de la empresa" />
              </div>
            )}

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione una pregunta de seguridad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mascota">
                  ¿Cuál es el nombre de tu primera mascota?
                </SelectItem>
                <SelectItem value="ciudad">¿En qué ciudad naciste?</SelectItem>
                <SelectItem value="libro">
                  ¿Cuál es tu libro favorito?
                </SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="text"
              placeholder="Respuesta a la pregunta de seguridad"
              required
            />

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              Registrarse
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
