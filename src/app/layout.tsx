import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header"; // ✅ Importando o Header correto
import Footer from "./components/Footer"; // ✅ Criando um Footer modularizado

export const metadata: Metadata = {
  title: "NimbusHub",
  description: "Um dashboard para a exibição de dados meteorológicos da estação meteorológica DIY",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Header /> {/* ✅ Agora o Header correto será exibido */}
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer /> {/* ✅ Modularizando o Footer também */}
      </body>
    </html>
  );
}
