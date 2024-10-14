"use client";
import { useState } from "react";
import {
  Package,
  Clipboard,
  DollarSign,
  BarChart2,
  Plus,
  User,
  LogOut,
} from "lucide-react";

import { useRouter } from "next/navigation"; // Importar useRouter
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUsuario } from "@/store";

const products = [
  { id: 1, name: "Producto 1", price: 99.99, stock: 50 },
  { id: 2, name: "Producto 2", price: 149.99, stock: 30 },
  { id: 3, name: "Producto 3", price: 79.99, stock: 100 },
];

const sales = [
  {
    id: 1,
    date: "2023-05-01",
    product: "Producto 1",
    quantity: 2,
    total: 199.98,
  },
  {
    id: 2,
    date: "2023-05-02",
    product: "Producto 2",
    quantity: 1,
    total: 149.99,
  },
  {
    id: 3,
    date: "2023-05-03",
    product: "Producto 3",
    quantity: 3,
    total: 239.97,
  },
];

export default function VendorDashboard() {
  const { usuarioIniciado } = useUsuario();
  const router = useRouter(); // Inicializar useRouter

  const [activeTab, setActiveTab] = useState("inventory");

  return (
    <div className="flex flex-col  min-h-screen">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MerkZone Vendedor</h1>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.replace("/profile")}
            >
              <User size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/")}
            >
              {" "}
              {/* Redirige a la página de inicio */}
              <LogOut size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList>
            <TabsTrigger value="inventory">
              <Package className="mr-2" size={20} />
              Inventario
            </TabsTrigger>
            <TabsTrigger value="addProduct">
              <Plus className="mr-2" size={20} />
              Agregar Producto
            </TabsTrigger>
            <TabsTrigger value="sales">
              <Clipboard className="mr-2" size={20} />
              Ventas
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart2 className="mr-2" size={20} />
              Análisis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Inventario</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Producto</TableHead>
                      <TableHead>Precio</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" className="mr-2">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Eliminar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addProduct">
            <Card>
              <CardHeader>
                <CardTitle>Agregar Nuevo Producto</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="productName">Nombre del producto</Label>
                    <Input
                      id="productName"
                      placeholder="Ingrese el nombre del producto"
                    />
                  </div>
                  <div>
                    <Label htmlFor="productPrice">Precio</Label>
                    <Input
                      id="productPrice"
                      type="number"
                      placeholder="Ingrese el precio"
                    />
                  </div>
                  <div>
                    <Label htmlFor="productStock">Stock</Label>
                    <Input
                      id="productStock"
                      type="number"
                      placeholder="Ingrese la cantidad en stock"
                    />
                  </div>
                  <Button type="submit">Agregar Producto</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales">
            <Card>
              <CardHeader>
                <CardTitle>Ventas Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Producto</TableHead>
                      <TableHead>Cantidad</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sales.map((sale) => (
                      <TableRow key={sale.id}>
                        <TableCell>{sale.date}</TableCell>
                        <TableCell>{sale.product}</TableCell>
                        <TableCell>{sale.quantity}</TableCell>
                        <TableCell>${sale.total.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Análisis de Ventas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Ingresos Totales
                      </CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$589.94</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Ventas
                      </CardTitle>
                      <Clipboard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">6</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Productos Vendidos
                      </CardTitle>
                      <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">15</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Promedio por Venta
                      </CardTitle>
                      <BarChart2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$98.32</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gray-100 text-center p-4 mt-8">
        <p>&copy; 2023 MerkZone. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
