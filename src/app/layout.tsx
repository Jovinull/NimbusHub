// layout.tsx
import type { Metadata } from "next";
import "./globals.css";

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
        <header className="bg-gray-800 p-4 text-center text-lg font-bold">NimbusHub</header>
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 p-4 text-center text-sm">&copy; 2025 NimbusHub</footer>
      </body>
    </html>
  );
}
