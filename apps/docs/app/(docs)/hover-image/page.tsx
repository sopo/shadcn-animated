import type { Metadata } from "next";
import HoverImageDocs from "./components/hover-image-docs";

export const metadata: Metadata = {
  title: "Animated Hover Image for React | shadcn/ui + Motion",
  description:
    "A smooth animated Hover Image component for React and shadcn/ui, powered by Motion. Add fluid image reveals, scale, opacity, and hover interactions to your UI.",

  keywords: [
    // Core
    "animated hover image",
    "animated hover image react",
    "react animated hover image",
    "react hover image animation",
    "shadcn animated hover image",
    "shadcn hover image animation",
    "shadcn/ui hover image",
    "animated shadcn components",
    "shadcn animated components",
    "shadcn animations",

    // Hover image animations
    "hover image animation",
    "image hover animation",
    "image hover effect",
    "animated image hover",
    "hover image transition",
    "hover image reveal",
    "image reveal animation",
    "image scale animation",
    "image zoom hover",
    "image zoom animation",
    "smooth image hover",
    "animated image reveal",
    "image opacity animation",
    "image transition react",

    // Motion
    "Motion React hover image",
    "Motion hover image animation",
    "Motion React animation",
    "Motion spring animation",
    "Motion UI components",
    "Motion React components",
    "React Motion animations",
    "spring hover animation",
    "smooth spring animation",

    // UI / interaction
    "animated UI components",
    "interactive hover image",
    "interactive UI components",
    "UI micro interactions",
    "hover micro interaction",
    "micro interactions React",
    "animated components React",
    "React UI animations",
    "React animation components",
    "smooth UI animations",

    // Component library
    "animated React components",
    "animated component library",
    "animated component library React",
    "shadcn component animations",
    "shadcn motion components",
    "Tailwind animated components",
    "Tailwind CSS animations",
    "React hover component",
    "React image component",
    "React hover effects",
  ],

  alternates: {
    canonical: "https://shadcn-animated.vercel.app/hover-image",
  },

  openGraph: {
    title: "Animated Hover Image for React | shadcn/ui + Motion",
    description:
      "Create smooth animated hover images with shadcn/ui and Motion. Explore image reveal, scale, opacity, zoom, and spring hover animations for React.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/hover-image",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated Hover Image for React | shadcn/ui + Motion",
    description:
      "A smooth animated Hover Image for React and shadcn/ui, powered by Motion with fluid image reveals, scale, opacity, and hover interactions.",
    creator: "@sopocodes",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function HoverImagePage() {
  return <HoverImageDocs />;
}