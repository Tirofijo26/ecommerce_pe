"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useUsuario } from "@/store";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserDetail() {
  const router = useRouter();

  const { usuarioIniciado } = useUsuario();

  const handleBack = () => {
    if (usuarioIniciado.rol === "comprador") {
      router.replace("buyer");
    } else {
      router.replace("dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="pb-0">
          <div className="flex items-center space-x-4">
            <div>
              <CardTitle className="text-2xl font-bold">
                {usuarioIniciado.nombre}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {usuarioIniciado.rol}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-6 grid gap-6">
          <div className="grid gap-2">
            <Label className="font-semibold">Correo Electrónico</Label>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{usuarioIniciado.correo}</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label className="font-semibold">Teléfono</Label>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{usuarioIniciado.telefono}</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label className="font-semibold">Dirección</Label>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{usuarioIniciado.direccion}</span>
            </div>
          </div>

          <div className="grid gap-2">
            <Label className="font-semibold">Fecha de Registro</Label>
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{usuarioIniciado.fechaRegistro}</span>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <Button onClick={handleBack}>Volver</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
