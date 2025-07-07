import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Sistema de Gestión Veterinaria`,
  description:
    "Sistema integral de administración veterinaria para la gestión completa de clínicas. Gestión de clientes, mascotas, citas con kanban, POS, inventario y reportes en una sola plataforma.",
  keywords: [
    "sistema veterinario",
    "gestión clínica veterinaria",
    "software veterinario",
    "POS veterinario",
    "inventario veterinario",
    "citas veterinarias",
    "gestión mascotas",
    "administración veterinaria",
    "kanban veterinario",
    "petClinic",
    "sistema integral veterinario",
    "clínica veterinaria software",
  ],
  openGraph: {
    type: "website",
    siteName: `${process.env.NEXT_PUBLIC_APP_NAME} - Sistema Veterinario`,
    locale: "es_ES",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://petclinic.com",
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Sistema de Gestión Veterinaria`,
    description:
      "Sistema integral de administración veterinaria. Gestión de clientes, mascotas, citas con kanban, POS, inventario y reportes para clínicas veterinarias.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_APP_NAME} - Sistema de Gestión Veterinaria`,
      },
    ],
  },
  authors: [
    {
      name: "petClinic Team",
      url: process.env.NEXT_PUBLIC_BASE_URL || "https://petclinic.com",
    },
  ],
  creator: "petClinic Team",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
