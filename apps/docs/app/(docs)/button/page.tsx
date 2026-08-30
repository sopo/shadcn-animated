import type { Metadata } from "next";
import ButtonDocs from "@/app/(docs)/button/components/button-docs";

export const metadata: Metadata = {
  title: "Animated Button for React | shadcn/ui + Motion",
  description:
    "A customizable animated Button component for React and shadcn/ui, powered by Motion. Add smooth hover, tap, press, scale, and interactive animations to your UI.",

  keywords: [
    // Core
    "animated button",
    "animated button react",
    "react animated button",
    "shadcn animated button",
    "shadcn button animation",
    "animated shadcn components",
    "shadcn animated components",
    "shadcn/ui button",
    "shadcn animations",

    // Button animations
    "button hover animation",
    "button hover effects",
    "button press animation",
    "button click animation",
    "button tap animation",
    "button scale animation",
    "button transition",
    "smooth button animation",
    "interactive button",
    "animated UI button",
    "CSS button animations",
    "React button animation",

    // Motion
    "Motion React button",
    "Motion button animation",
    "Motion hover animation",
    "Motion tap animation",
    "Motion UI components",
    "Motion React components",
    "React Motion animations",

    // UI / interaction
    "UI micro interactions",
    "button micro interaction",
    "micro interactions React",
    "interactive UI components",
    "animated UI components",
    "React UI animations",
    "React animation components",
    "modern React components",
    "Tailwind animated components",
    "Tailwind CSS button animation",

    // Component library
    "animated React components",
    "animated component library",
    "animated component library React",
    "shadcn component animations",
    "shadcn motion components",
  ],

  alternates: {
    canonical:
      "https://shadcn-animated.vercel.app/button",
  },

  openGraph: {
    title: "Animated Button for React | shadcn/ui + Motion",
    description:
      "Create smooth, interactive buttons with shadcn/ui and Motion. Explore hover, tap, press, scale, and other button animations for React.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/button",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated Button for React | shadcn/ui + Motion",
    description:
      "A customizable animated Button for React and shadcn/ui, powered by Motion with smooth hover, tap, press, and scale animations.",
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


export default function ButtonPage() {
  return <ButtonDocs />;
}
