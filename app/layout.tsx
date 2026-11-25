import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Más — Alejandro Sanz",
  description: "Mockup de un reproductor musical inspirado en el álbum Más.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
