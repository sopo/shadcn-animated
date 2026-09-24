import type { Metadata } from "next";
import FABMenuDocs from "./components/FAB-menu-docs";



export const metadata: Metadata = {
  title: "Animated Collapsible for React | shadcn/ui + Motion",
  description:
    "A smooth animated Collapsible component for React and shadcn/ui, powered by Motion. Add fluid height, opacity, slide, and state transition animations to your UI.",

  keywords: [
    // Core
    "animated collapsible",
    "animated collapsible react",
    "react animated collapsible",
    "react collapsible animation",
    "shadcn animated collapsible",
    "shadcn collapsible animation",
    "shadcn/ui collapsible",
    "animated shadcn components",
    "shadcn animated components",
    "shadcn animations",

    // Collapsible animations
    "collapsible animation",
    "collapsible transition",
    "collapsible open animation",
    "collapsible close animation",
    "collapsible expand animation",
    "collapsible collapse animation",
    "expand collapse animation",
    "accordion animation",
    "smooth collapsible animation",
    "animated expand collapse",
    "animated content reveal",
    "animated content transition",
    "height animation react",
    "height transition react",

    // Motion
    "Motion React collapsible",
    "Motion collapsible animation",
    "Motion React animation",
    "Motion spring animation",
    "Motion UI components",
    "Motion React components",
    "React Motion animations",
    "spring collapsible animation",
    "smooth spring animation",

    // UI / interaction
    "animated UI components",
    "interactive collapsible",
    "interactive UI components",
    "UI micro interactions",
    "collapsible micro interaction",
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
    "React collapsible component",
    "React expandable component",
  ],

  alternates: {
    canonical: "https://shadcn-animated.vercel.app/collapsible",
  },

  openGraph: {
    title: "Animated Collapsible for React | shadcn/ui + Motion",
    description:
      "Create smooth animated collapsibles with shadcn/ui and Motion. Explore height, opacity, slide, spring, and state transition animations for React.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/collapsible",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated Collapsible for React | shadcn/ui + Motion",
    description:
      "A smooth animated Collapsible for React and shadcn/ui, powered by Motion with fluid height, opacity, slide, and state transitions.",
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

export default function FABMenuPage() {
  return <FABMenuDocs />;
}
