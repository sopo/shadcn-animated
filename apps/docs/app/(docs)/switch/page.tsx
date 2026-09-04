import SwitchDocs from "@/app/(docs)/switch/components/switch-docs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Switch for React | shadcn/ui + Motion",
  description:
    "A smooth animated Switch component for React and shadcn/ui, powered by Motion. Add fluid toggle, spring, scale, and state transition animations to your interfaces.",

  keywords: [
    // Core
    "animated switch",
    "animated switch react",
    "react animated switch",
    "react switch animation",
    "animated toggle",
    "animated toggle button",
    "react toggle animation",
    "animated toggle switch",
    "shadcn animated switch",
    "shadcn switch animation",
    "shadcn/ui switch",
    "animated shadcn components",
    "shadcn animated components",
    "shadcn animations",

    // Switch animations
    "switch animation",
    "switch toggle animation",
    "switch toggle transition",
    "switch checked animation",
    "switch unchecked animation",
    "switch state animation",
    "switch transition",
    "toggle switch animation",
    "toggle button animation",
    "toggle state animation",
    "smooth switch animation",
    "animated toggle transition",
    "switch thumb animation",
    "switch knob animation",
    "switch scale animation",
    "switch spring animation",

    // Motion
    "Motion React switch",
    "Motion switch animation",
    "Motion toggle animation",
    "Motion React toggle",
    "Motion spring switch",
    "Motion UI components",
    "Motion React components",
    "React Motion animations",
    "spring toggle animation",

    // UI / interaction
    "animated form components",
    "animated form controls",
    "interactive switch",
    "interactive toggle",
    "interactive form components",
    "UI micro interactions",
    "switch micro interaction",
    "toggle micro interaction",
    "micro interactions React",
    "animated UI components",
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
    "Tailwind CSS switch animation",
    "Tailwind CSS toggle animation",
  ],

  alternates: {
    canonical: "https://shadcn-animated.vercel.app/switch",
  },

  openGraph: {
    title: "Animated Switch for React | shadcn/ui + Motion",
    description:
      "Create smooth animated Switch components with shadcn/ui and Motion. Explore toggle, spring, scale, and state transition animations for React.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/switch",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated Switch for React | shadcn/ui + Motion",
    description:
      "A smooth animated Switch for React and shadcn/ui, powered by Motion with fluid toggle and state transition animations.",
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

export default function SwitchPage() {
  return <SwitchDocs />;
}
