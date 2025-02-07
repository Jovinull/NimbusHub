import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NimbusHub",
  description: "Um dashboard para a exibição de dados meteorológicos da estação meteorológica DIY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
