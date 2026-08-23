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
