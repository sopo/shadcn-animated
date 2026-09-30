import type { Metadata } from "next";
import ImageCardDocs from "./components/image-card-docs";

export const metadata: Metadata = {
  title: "Animated Card for React | shadcn/ui + Motion",
  description:
    "A smooth animated Card component for React and shadcn/ui, powered by Motion. Add fluid hover animations, image transitions, layered images, and interactive card effects to your UI.",

  keywords: [
    // Core
    "animated card",
    "animated card react",
    "react animated card",
    "card animation react",
    "shadcn animated card",
    "shadcn card animation",
    "shadcn/ui animated card",
    "animated shadcn components",
    "shadcn animated components",
    "shadcn animations",

    // Card animations
    "card hover animation",
    "animated card hover",
    "card hover effect",
    "card hover animation react",
    "interactive card",
    "interactive card react",
    "card transition",
    "card reveal animation",
    "card image animation",
    "animated image card",
    "image card animation",
    "image card hover effect",
    "layered card animation",
    "stacked image card",
    "animated image card react",
    "smooth card animation",
    "card micro interaction",

    // Motion
    "Motion React card",
    "Motion React card animation",
    "Motion card hover",
    "Motion hover animation",
    "Motion React animation",
    "Motion spring animation",
    "Motion UI components",
    "Motion React components",
    "React Motion animations",
    "spring card animation",
    "smooth spring animation",

    // UI / interaction
    "animated UI components",
    "interactive UI components",
    "UI micro interactions",
    "card micro interactions",
    "micro interactions React",
    "animated components React",
    "React UI animations",
    "React animation components",
    "smooth UI animations",
    "interactive React components",

    // Component library
    "animated React components",
    "animated component library",
    "animated component library React",
    "shadcn component animations",
    "shadcn motion components",
    "Tailwind animated components",
    "Tailwind CSS animations",
    "React card component",
    "React animated components",
    "shadcn card component",
  ],

  alternates: {
    canonical: "https://shadcn-animated.vercel.app/image-card",
  },

  openGraph: {
    title: "Animated Card for React | shadcn/ui + Motion",
    description:
      "Create smooth animated cards with shadcn/ui and Motion. Add layered images, hover transitions, spring animations, and interactive card effects to React interfaces.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/image-card",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated Card for React | shadcn/ui + Motion",
    description:
      "A smooth animated Card component for React and shadcn/ui, powered by Motion with layered images, hover transitions, and interactive animations.",
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

export default function CardAnimationPage() {
  return <ImageCardDocs />;
}