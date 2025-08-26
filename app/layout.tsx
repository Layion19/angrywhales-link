// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // IMPORTANT : remplace par ton domaine final si différent
  metadataBase: new URL("https://link.angrywhales.io"),

  title: {
    default: "Angry Whales | Official Links",
    template: "%s · Angry Whales",
  },
  description:
    "All the official Angry Whales links. Join the pod and stay tuned 🐋⚡",

  openGraph: {
    type: "website",
    url: "https://link.angrywhales.io",
    siteName: "Angry Whales",
    title: "Angry Whales | Official Links",
    description:
      "All the official Angry Whales links. Join the pod and stay tuned 🐋⚡",
    images: [
      {
        // ➜ place une image 1200x630 dans /public
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Angry Whales",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Angry Whales | Official Links",
    description:
      "All the official Angry Whales links. Join the pod and stay tuned 🐋⚡",
    images: ["/og-banner.png"],
    creator: "@angrywhales__",
  },

  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
