import type { Metadata } from "next";
import NextSection from "@/components/next-section";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Introduction | Animated shadcn/ui Components",
  description:
    "Discover animated shadcn/ui components for React, powered by Motion. Build beautiful, interactive interfaces with smooth animations, transitions, and micro-interactions.",

  keywords: [
    // Primary
    "animated shadcn components",
    "shadcn animated components",
    "animated shadcn/ui",
    "shadcn/ui animations",
    "shadcn animations",
    "animated React components",
    "React animated components",
    "animated UI components",
    "animated UI library",
    "React animation components",

    // Introduction / discovery
    "animated shadcn components introduction",
    "shadcn animated components guide",
    "shadcn animations guide",
    "shadcn UI animations",
    "what is shadcn animated",
    "animated React UI",
    "React animated UI library",
    "React animation component library",
    "modern animated React components",
    "beautiful animated React components",

    // Motion
    "Motion React components",
    "Motion UI components",
    "Motion animations React",
    "Motion component library",
    "React Motion components",
    "React Motion animations",
    "animated components Motion",
    "shadcn Motion components",
    "shadcn Motion animations",

    // Animation types
    "smooth UI animations",
    "smooth React animations",
    "interactive UI animations",
    "UI micro interactions",
    "React micro interactions",
    "animated interactions",
    "interactive React components",
    "hover animations React",
    "click animations React",
    "spring animations React",
    "fade animations React",
    "slide animations React",
    "scale animations React",
    "transition animations React",
    "component transitions React",

    // shadcn ecosystem
    "shadcn components",
    "shadcn/ui components",
    "shadcn component library",
    "shadcn UI library",
    "shadcn React components",
    "shadcn Tailwind components",
    "shadcn component animations",

    // Developer intent
    "copy paste React components",
    "copy paste shadcn components",
    "copy paste animated components",
    "free animated React components",
    "free React UI components",
    "modern React components",
    "React UI component library",
    "Tailwind animated components",
    "Tailwind CSS animations",
  ],

  metadataBase: new URL("https://shadcn-animated.vercel.app"),

  alternates: {
    canonical: "/introduction",
  },

  openGraph: {
    title: "Introduction | Animated shadcn/ui Components",
    description:
      "Explore animated shadcn/ui components for React, powered by Motion. Learn how to build beautiful interfaces with smooth animations and interactions.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/introduction",
  },

  twitter: {
    card: "summary_large_image",
    title: "Introduction | Animated shadcn/ui Components",
    description:
      "Explore beautiful animated shadcn/ui components for React, powered by Motion. Build smoother interfaces with ready-to-use animations.",
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

const IntroductionPage = () => {
  return (
    <div className=" flex flex-col gap-8">
      <h1 className="text-3xl">Introduction</h1>
      <div className="">
        <p className="text-secondary-foreground leading-[150%]">
          <span>
            <span className="text-foreground">shadcn animated</span> is a
            growing collection of{" "}
            <span className="text-foreground">
              animated shadcn/ui components
            </span>
            , crafted by hand.
          </span>
          <span className="text-foreground"> Copy and paste</span> the
          components directly into your project, or install them with the CLI.{" "}
          <br></br>
          <br></br>{" "}
          <span className="text-foreground">
            New components are added weekly.
          </span>
        </p>
      </div>
      <NextSection title="Installation" link={LINKS.INSTALLATION} />
    </div>
  );
};
export default IntroductionPage;
