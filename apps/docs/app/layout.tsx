import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "shadcn animated",
    template: "%s | shadcn animated",
  },
  description:
    "A growing collection of handcrafted animated shadcn/ui components.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Your Site",
    description: "Your site description",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your Site",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
