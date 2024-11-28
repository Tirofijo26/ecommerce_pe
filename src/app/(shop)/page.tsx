import { ProductsGrid, Sidebar } from "@/components";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";

const products = [
  {
    id: 1,
    nombre: "Atorvastatina",
    descripcion:'20mg X30 Tabletas',
    cantidad: 1,
    precio: 45150,
    image:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/366527-800-800?v=638455303941030000&width=800&height=800&aspect=true",
  },
  {
    id: 2,
    nombre: "Rosuvastatina",
    descripcion:'20mg X28 Tabletas',
    cantidad: 1,
    precio: 171550,
    image:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/230714-800-800?v=637344901199500000&width=800&height=800&aspect=true",
  },
  {
    id: 3,
    nombre: "Neviot",
    descripcion:'100mg X30 Capsulas',
    cantidad: 1,
    precio: 201200,
    image:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/334626-800-800?v=638150415148430000&width=800&height=800&aspect=true",
  },
  {
    id: 4,
    nombre: "Candesartan",
    descripcion:'16Mg Caja X 30 Tabletas',
    cantidad: 1,
    precio: 33300,
    image:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/274415-800-800?v=637727542544970000&width=800&height=800&aspect=true",
  },
  {
    id: 5,
    nombre: "Rosuvina 10",
    descripcion:'10 mg X28 Tabletas Recubiertas',
    cantidad: 1,
    precio: 60450,
    image:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/188589-800-800?v=636051349910370000&width=800&height=800&aspect=true",
  },
  {
    id: 6,
    nombre: "Vytorin",
    descripcion:'10/20Mg X 28 Comprimidos',
    cantidad: 1,
    precio: 98550,
    image:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/181156-600-600?v=635972038815530000&width=600&height=600&aspect=true",
  },
  {
    id: 7,
    nombre: "Protector Solar Eucerin Oil",
    descripcion:'Fps50 X 50Ml',
    cantidad: 1,
    precio: 95500,
    image:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/336572-800-800?v=638171993585030000&width=800&height=800&aspect=true",
  },
  {
    id: 8,
    nombre: "Isdin Fotoprotector Uv Mineral Brus",
    descripcion:'Spf50 X2g',
    cantidad: 1,
    precio: 91360,
    image:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/366485-600-600?v=638455224593070000&width=600&height=600&aspect=true",
  },
  {
    id: 9,
    nombre: "Listerine Cool Mint",
    descripcion:'X 1 Litro',
    cantidad: 1,
    precio: 27750,
    image:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/379702-600-600?v=638614485852230000&width=600&height=600&aspect=true",
  },
];

export default function BuyerHomepage() {

  return (
    <div className="flex flex-col min-h-screen">
      <TopMenu />

      <main className="flex-grow container mx-auto p-4 flex">
        <Sidebar />

        <section className="flex-grow">
          <ProductsGrid products={products} />
        </section>
      </main>
    </div>
  );
}
