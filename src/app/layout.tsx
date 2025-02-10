import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider"; // ✅ Importando o ThemeProvider

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
        <ThemeProvider>
          <Header />
          <main className="flex-1 container mx-auto p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
