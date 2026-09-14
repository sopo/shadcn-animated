import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/footer";
import Header from "@/components/header";

import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shadcn-animated.vercel.app"),

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
    title: "shadcn animated",
    description:
      "A growing collection of handcrafted animated shadcn/ui components.",
    type: "website",
    images: [
      {
        url: "https://shadcn-animated.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "shadcn animated",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "shadcn animated",
    description:
      "A growing collection of handcrafted animated shadcn/ui components.",
    images: ["https://shadcn-animated.vercel.app/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <main className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
