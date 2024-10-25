import { ProductsGrid, Sidebar } from "@/components";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";

const products = [
  {
    id: 1,
    nombre: "Camisa Oversize",
    cantidad: 1,
    precio: 20000,
    image:
      "https://trueshop.co/cdn/shop/files/camiseta_oversized_cuello_tejido_negra_1.jpg?v=1703195418",
  },
  {
    id: 2,
    nombre: "Televisores",
    cantidad: 1,
    precio: 2000000,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121755628_01/w=1500,h=1500,fit=pad",
  },
  {
    id: 3,
    nombre: "Mesa de noche",
    cantidad: 1,
    precio: 200000,
    image:
      "https://tugocolombia.vteximg.com.br/arquivos/ids/215161/6177213-2.jpg",
  },
  {
    id: 4,
    nombre: "Impresoras",
    cantidad: 1,
    precio: 600000,
    image:
      "https://mediaserver.goepson.com/ImConvServlet/imconv/61dcb6a700968d5fe27870dc9e72d7151805d623/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=L8050_aberta",
  },
  {
    id: 5,
    nombre: "Calzados",
    cantidad: 1,
    precio: 15000,
    image:
      "https://i3.wp.com/media.aldoshoes.com/v3/product/zale/220-001-043/zale_brown_220-001-043_alt1_sq_nt_1000x1000.jpg?ssl=1",
  },
  {
    id: 6,
    nombre: "Bolsos",
    cantidad: 1,
    precio: 12000,
    image:
      "https://elaco.vteximg.com.br/arquivos/ids/670034-1000-1464/-elaco-producto-Bolsosycarteras-FUCSIA-E411866-1.jpg?v=638327278624970000",
  },
  {
    id: 7,
    nombre: "Carteras",
    cantidad: 1,
    precio: 70000,
    image:
      "https://cdnx.jumpseller.com/urbenmood/image/45356295/PS917_Billetera_Clip_Hombre_Cuero_Sintetico_-_Color_Negro_Cafe.jpeg?1707442486",
  },
  {
    id: 8,
    nombre: "Juguetes",
    cantidad: 1,
    precio: 50000,
    image:
      "https://exitocol.vtexassets.com/arquivos/ids/14997473/MUNECAS-GRANDES-BOING-TOYS-3299514_b.jpg?v=638006066767830000",
  },
  {
    id: 9,
    nombre: "Figuras de acción",
    cantidad: 1,
    precio: 60000,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_868773-MCO76184153102_052024-O.webp",
  },
  {
    id: 10,
    nombre: "Maquillaje",
    cantidad: 1,
    precio: 100000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuULFAx_Vx-TvKSZTEfZY9P9Bgizr5OeydP9W6EBwYQ&s",
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
