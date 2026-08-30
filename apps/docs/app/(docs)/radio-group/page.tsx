import RadioGroupDocs from "@/app/(docs)/radio-group/components/radio-group-docs";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Animated Radio Buttons for React | shadcn/ui + Motion",
  description:
    "A smooth animated Radio Group component for React and shadcn/ui, powered by Motion. Add fluid selection, scale, spring, and state transition animations to your forms.",

  keywords: [
    // Core
    "animated radio buttons",
    "animated radio button react",
    "react animated radio buttons",
    "react radio button animation",
    "animated radio group",
    "react radio group animation",
    "shadcn animated radio group",
    "shadcn radio button animation",
    "shadcn/ui radio group",
    "animated shadcn components",
    "shadcn animated components",
    "shadcn animations",

    // Radio animations
    "radio button animation",
    "radio button selection animation",
    "radio button selected animation",
    "radio button checked animation",
    "radio button transition",
    "radio group transition",
    "radio selection animation",
    "radio state animation",
    "smooth radio button animation",
    "animated radio selection",
    "radio indicator animation",
    "radio circle animation",
    "radio scale animation",

    // Motion
    "Motion React radio button",
    "Motion radio button animation",
    "Motion radio group",
    "Motion selection animation",
    "Motion spring animation",
    "Motion UI components",
    "Motion React components",
    "React Motion animations",
    "spring radio button animation",

    // UI / interaction
    "animated form components",
    "animated form controls",
    "interactive radio buttons",
    "interactive radio group",
    "interactive form components",
    "UI micro interactions",
    "radio button micro interaction",
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
    "Tailwind CSS radio button animation",
  ],

  alternates: {
    canonical:
      "https://shadcn-animated.vercel.app/radio-group",
  },

  openGraph: {
    title: "Animated Radio Buttons for React | shadcn/ui + Motion",
    description:
      "Create smooth animated Radio Groups with shadcn/ui and Motion. Explore selection, scale, spring, and state transition animations for React.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/radio-group",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated Radio Buttons for React | shadcn/ui + Motion",
    description:
      "A smooth animated Radio Group for React and shadcn/ui, powered by Motion with fluid selection and state transition animations.",
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


export default function RadioGroupPage() {
  return <RadioGroupDocs />;
}
