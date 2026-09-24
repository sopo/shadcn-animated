import type { Metadata } from "next";
import FABMenuDocs from "./components/FAB-menu-docs";

export const metadata: Metadata = {
  title: "Animated FAB Menu for React | shadcn/ui + Motion",
  description:
    "A smooth animated Floating Action Button (FAB) Menu for React and shadcn/ui, powered by Motion. Free and open-source with fluid spring animations and interactive menu transitions.",

  keywords: [
    // Core
    "animated FAB menu",
    "FAB menu React",
    "React FAB menu",
    "floating action button React",
    "animated floating action button",
    "animated floating menu",
    "shadcn FAB menu",
    "shadcn animated FAB",
    "shadcn/ui FAB menu",
    "free React FAB menu",
    "open source FAB menu",
    "free shadcn components",
     "free animated components",
    "free animated React components",

    // FAB / menu animations
    "FAB animation",
    "FAB menu animation",
    "floating action button animation",
    "floating menu animation",
    "animated action menu",
    "animated menu React",
    "menu open animation",
    "menu close animation",
    "menu expand animation",
    "menu collapse animation",
    "smooth menu animation",
    "spring menu animation",
    "animated menu transition",
    "menu micro interaction",
    "floating menu transition",

    // Motion
    "Motion React FAB",
    "Motion FAB menu",
    "Motion React menu animation",
    "Motion spring animation",
    "Motion UI components",
    "Motion React components",
    "React Motion animations",
    "spring FAB animation",
    "smooth spring animation",

    // UI / interaction
    "animated UI components",
    "interactive FAB menu",
    "interactive UI components",
    "UI micro interactions",
    "FAB micro interaction",
    "micro interactions React",
    "animated components React",
    "React UI animations",
    "React animation components",
    "smooth UI animations",
    "floating action menu",
    "floating action button menu",

    // Component library
    "animated React components",
    "animated component library",
    "animated component library React",
    "shadcn component animations",
    "shadcn motion components",
    "Tailwind animated components",
    "Tailwind CSS animations",
    "React menu component",
    "React action menu",
    "React floating menu",
  ],

  alternates: {
    canonical: "https://shadcn-animated.vercel.app/fab-menu",
  },

  openGraph: {
    title: "Animated FAB Menu for React | shadcn/ui + Motion",
    description:
      "Build smooth animated Floating Action Button menus with React, shadcn/ui, and Motion. Free and open-source with fluid spring and menu transition animations.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/fab-menu",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated FAB Menu for React | shadcn/ui + Motion",
    description:
      "A free and open-source animated FAB Menu for React and shadcn/ui, powered by Motion with smooth spring and menu transitions.",
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
