import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MerkZone",
  description: "Una tienda virtual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}

        <footer className="bg-gray-100 text-center p-4">
          <p>&copy; 2023 MerkZone. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
