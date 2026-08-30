import CheckboxDocs from "@/app/(docs)/checkbox/components/checkbox-docs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Checkbox for React | shadcn/ui + Motion",
  description:
    "A smooth animated Checkbox component for React and shadcn/ui, powered by Motion. Add fluid checkmark, scale, spring, and state transition animations to your UI.",

  keywords: [
    // Core
    "animated checkbox",
    "animated checkbox react",
    "react animated checkbox",
    "react checkbox animation",
    "shadcn animated checkbox",
    "shadcn checkbox animation",
    "shadcn/ui checkbox",
    "animated shadcn components",
    "shadcn animated components",
    "shadcn animations",

    // Checkbox animations
    "checkbox animation",
    "checkbox checkmark animation",
    "checkbox check animation",
    "checkbox checked animation",
    "checkbox unchecked animation",
    "checkbox toggle animation",
    "checkbox transition",
    "checkbox state animation",
    "smooth checkbox animation",
    "animated checkmark",
    "animated check icon",
    "checkmark transition",
    "checkmark animation react",

    // Motion
    "Motion React checkbox",
    "Motion checkbox animation",
    "Motion checkmark animation",
    "Motion spring animation",
    "Motion UI components",
    "Motion React components",
    "React Motion animations",
    "spring checkbox animation",

    // UI / interaction
    "animated form components",
    "animated form controls",
    "interactive checkbox",
    "interactive form components",
    "UI micro interactions",
    "checkbox micro interaction",
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
    "Tailwind CSS checkbox animation",
  ],

  alternates: {
    canonical:
      "https://shadcn-animated.vercel.app/checkbox",
  },

  openGraph: {
    title: "Animated Checkbox for React | shadcn/ui + Motion",
    description:
      "Create smooth animated checkboxes with shadcn/ui and Motion. Explore checkmark, spring, scale, and state transition animations for React.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/checkbox",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated Checkbox for React | shadcn/ui + Motion",
    description:
      "A smooth animated Checkbox for React and shadcn/ui, powered by Motion with fluid checkmark and state transition animations.",
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

export default function CheckboxPage() {
  return <CheckboxDocs />;
}
