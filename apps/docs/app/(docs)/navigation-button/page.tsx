import type { Metadata } from "next";
import NavigationButtonDocs from "./components/navigation-button-docs";

export const metadata: Metadata = {
  title: "Animated Navigation Button for React | shadcn/ui + Motion",
  description:
    "A smooth animated Navigation Button for React and shadcn/ui, powered by Motion. Add fluid arrow animations and interactive hover effects to your buttons.",

  keywords: [
    // Core
    "animated navigation button",
    "animated navigation button react",
    "react animated navigation button",
    "animated button react",
    "animated button shadcn",
    "shadcn animated button",
    "shadcn navigation button",
    "shadcn/ui animated button",
    "shadcn/ui navigation button",
    "animated shadcn components",
    "shadcn animated components",
    "shadcn animations",

    // Arrow button
    "animated arrow button",
    "arrow button react",
    "animated arrow button react",
    "arrow hover animation",
    "arrow button animation",
    "animated arrow navigation",
    "arrow navigation button",
    "arrow hover effect",
    "arrow slide animation",
    "arrow slide hover",
    "arrow movement animation",
    "animated button arrow",
    "button arrow animation",
    "button arrow hover",

    // Button hover animations
    "button hover animation",
    "animated button hover",
    "button hover effect react",
    "react button hover animation",
    "smooth button hover",
    "button micro interaction",
    "button micro interaction react",
    "interactive button react",
    "animated UI button",
    "smooth button animation",
    "button transition animation",
    "button interaction animation",

    // Motion
    "Motion React button",
    "Motion React button animation",
    "Motion button hover animation",
    "Motion arrow animation",
    "Motion UI components",
    "Motion React components",
    "React Motion animations",
    "spring button animation",
    "smooth Motion animation",

    // UI / interaction
    "animated UI components",
    "interactive UI components",
    "UI micro interactions",
    "micro interactions React",
    "animated components React",
    "React UI animations",
    "React animation components",
    "smooth UI animations",
    "hover micro interaction",
    "React hover effects",

    // Component library
    "animated React components",
    "animated component library",
    "animated component library React",
    "shadcn component animations",
    "shadcn motion components",
    "Tailwind animated components",
    "Tailwind CSS animations",
    "React button component",
    "React navigation component",
    "React animated components",
  ],

  alternates: {
    canonical: "https://shadcn-animated.vercel.app/navigation-button",
  },

  openGraph: {
    title: "Animated Navigation Button for React | shadcn/ui + Motion",
    description:
      "Create smooth animated navigation buttons with shadcn/ui and Motion. Add fluid arrow animations and interactive hover effects to React buttons.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/navigation-button",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated Navigation Button for React | shadcn/ui + Motion",
    description:
      "A smooth animated Navigation Button for React and shadcn/ui, powered by Motion with fluid arrow animations and interactive hover effects.",
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

export default function NavigationButtonPage() {
  return <NavigationButtonDocs />;
}
