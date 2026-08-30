import AccordionPreview from "@/app/(docs)/accordion/components/accordion-preview";
import { ButtonProps } from "@/app/(docs)/button/components/button";
import ButtonPreview from "@/app/(docs)/button/components/button-preview";
import { CheckboxProps } from "@/app/(docs)/checkbox/components/checkbox";
import CheckboxPreview from "@/app/(docs)/checkbox/components/checkbox-preview";
import Hero from "@/components/hero";
import { RadioGroupProps } from "@/app/(docs)/radio-group/components/radio";
import RadioGroupPreview from "@/app/(docs)/radio-group/components/radio-group-preview";
import Shell from "@/components/shell";
import { AccordionProps } from "./(docs)/accordion/components/accordion";
import TabsPreview from "./(docs)/tabs/components/tabs-preview";
import { TabsProps } from "./(docs)/tabs/components/tabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated shadcn/ui Components for React | Motion",
  description:
    "A collection of beautiful, animated shadcn/ui components for React, powered by Motion. Copy, paste, customize, and add smooth animations to your projects.",

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
    "React UI animations",

    // shadcn ecosystem
    "shadcn components",
    "shadcn/ui components",
    "shadcn component library",
    "shadcn UI library",
    "shadcn React components",
    "shadcn Tailwind components",
    "shadcn motion components",
    "shadcn component animations",
    "shadcn components with animations",

    // Motion
    "Motion React components",
    "Motion UI components",
    "Motion animations React",
    "Motion component library",
    "React Motion components",
    "React Motion animations",
    "Motion UI library",
    "animated components Motion",

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

    // Tailwind
    "Tailwind animated components",
    "Tailwind CSS animations",
    "Tailwind UI animations",
    "Tailwind React components",
    "animated Tailwind components",
    "Tailwind Motion components",

    // Developer intent
    "copy paste React components",
    "copy paste shadcn components",
    "copy paste animated components",
    "free animated React components",
    "free React UI components",
    "free animated UI components",
    "React component library",
    "modern React components",
    "beautiful React components",
    "modern UI components",
  ],

  metadataBase: new URL("https://shadcn-animated.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Animated shadcn/ui Components for React | Motion",
    description:
      "Beautiful, animated shadcn/ui components for React, powered by Motion. Copy, paste, customize, and bring smooth interactions to your projects.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app",
  },

  twitter: {
    card: "summary_large_image",
    title: "Animated shadcn/ui Components for React | Motion",
    description:
      "Beautiful animated shadcn/ui components for React, powered by Motion. Copy, paste, customize, and ship smoother interfaces.",
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

export default function HomePage() {
  return (
    <div className="px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Hero />
        <section className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Shell props={ButtonProps}>
            <ButtonPreview />
          </Shell>
          <Shell props={TabsProps}>
            <TabsPreview />
          </Shell>
          <Shell props={CheckboxProps}>
            <CheckboxPreview />
          </Shell>
          <Shell props={RadioGroupProps}>
            <RadioGroupPreview />
          </Shell>

          <div className="md:col-span-2">
            <Shell props={AccordionProps}>
              <div className="min-h-50 ">
                <div className="flex self-start overflow-y-auto">
                  <AccordionPreview />
                </div>
              </div>
            </Shell>
          </div>
        </section>
      </div>
    </div>
  );
}
