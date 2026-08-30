import type { Metadata } from "next";
import TabsDocs from "./components/tabs-docs";


export const metadata: Metadata = {
  title: "Animated Tabs for React | shadcn/ui + Motion",
  description:
    "A smooth animated Tabs component for React and shadcn/ui, powered by Motion. Add fluid tab transitions, sliding indicators, active states, and interactive animations.",

  keywords: [
    // Core
    "animated tabs",
    "animated tabs react",
    "react animated tabs",
    "react tabs animation",
    "animated tab component",
    "animated tab navigation",
    "shadcn animated tabs",
    "shadcn tabs animation",
    "shadcn/ui tabs",
    "animated shadcn components",
    "shadcn animated components",
    "shadcn animations",

    // Tab animations
    "tabs transition animation",
    "tab transition react",
    "tab switching animation",
    "tab switch animation",
    "animated tab transition",
    "smooth tab animation",
    "tab content animation",
    "tab panel animation",
    "tab change animation",
    "tab selection animation",
    "active tab animation",
    "active tab indicator",
    "animated active tab",
    "tab indicator animation",
    "animated tab indicator",
    "sliding tab indicator",
    "tab underline animation",
    "animated tab underline",
    "sliding tabs animation",
    "tab slide animation",
    "tab fade animation",
    "tab content transition",

    // Motion
    "Motion React tabs",
    "Motion tabs animation",
    "Motion tab transition",
    "Motion active indicator",
    "Motion tab indicator",
    "Motion UI components",
    "Motion React components",
    "React Motion animations",
    "spring tab animation",

    // UI / interaction
    "animated navigation",
    "animated navigation tabs",
    "interactive tabs",
    "interactive tab navigation",
    "animated UI components",
    "animated navigation components",
    "UI micro interactions",
    "tab micro interaction",
    "micro interactions React",
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
    "Tailwind CSS tabs",
    "Tailwind tabs animation",
  ],

  alternates: {
    canonical:
      "https://shadcn-animated.vercel.app/tabs",
  },

  openGraph: {
    title: "Animated Tabs for React | shadcn/ui + Motion",
    description:
      "Create smooth animated Tabs with shadcn/ui and Motion. Explore tab transitions, sliding indicators, active states, and content animations for React.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/tabs",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated Tabs for React | shadcn/ui + Motion",
    description:
      "A smooth animated Tabs component for React and shadcn/ui, powered by Motion with fluid transitions and animated active indicators.",
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

export default function TabsPage() {
  return <TabsDocs />;
}
