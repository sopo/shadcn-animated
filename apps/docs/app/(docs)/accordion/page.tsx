import type { Metadata } from "next";
import AccordionDocs from "./components/accordion-docs";

export const metadata: Metadata = {
  title: "Animated Accordion for React | shadcn/ui + Motion",
  description:
    "A smooth animated Accordion component for React and shadcn/ui, powered by Motion. Install, customize, and add fluid expand and collapse animations to your UI.",

  keywords: [
    "animated accordion",
    "animated accordion react",
    "react accordion animation",
    "shadcn animated accordion",
    "shadcn accordion animation",
    "shadcn/ui accordion",
    "animated shadcn components",
    "shadcn animated components",
    "shadcn animations",
    "animated React components",
    "animated UI components",
    "React UI animations",
    "React animation components",
    "Motion React components",
    "Motion animations",
    "Motion UI components",
    "accordion expand animation",
    "accordion collapse animation",
    "expand collapse animation",
    "smooth accordion animation",
    "accordion transition",
    "animated component library",
    "animated component library React",
    "Tailwind animated components",
    "Tailwind CSS animations",
  ],

  alternates: {
    canonical: "https://shadcn-animated.vercel.app/accordion",
  },

  openGraph: {
    title: "Animated Accordion for React | shadcn/ui + Motion",
    description:
      "Add smooth expand and collapse animations to your shadcn/ui Accordion with Motion. Explore installation, usage, customization, and examples.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/accordion",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated Accordion for React | shadcn/ui + Motion",
    description:
      "A smooth animated Accordion for React and shadcn/ui, powered by Motion. Easy to install, customize, and use.",
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
  return <AccordionDocs />;
}
