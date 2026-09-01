import type { Metadata } from "next";

import NextSection from "@/components/next-section";
import { LINKS } from "@/lib/links";
import Bash from "@/components/bash";

export const metadata: Metadata = {
  title: "Installation | Animated shadcn/ui Components",
  description:
    "Install and set up animated shadcn/ui components for React with Motion and Tailwind CSS. Follow the quick setup guide to add animated components to your project.",

  keywords: [
    // Primary
    "shadcn animated components installation",
    "animated shadcn installation",
    "shadcn/ui animation installation",
    "shadcn animations installation",
    "animated React components installation",
    "React animation components installation",
    "animated UI components installation",
    "shadcn component library installation",

    // Setup
    "install animated shadcn components",
    "install shadcn animated components",
    "setup animated shadcn components",
    "setup shadcn animations",
    "shadcn animated components setup",
    "shadcn/ui setup",
    "shadcn components setup",
    "React animation setup",
    "animated React components setup",
    "animated UI library setup",

    // Motion
    "install Motion React",
    "Motion React installation",
    "Motion installation React",
    "Motion setup React",
    "Motion animation setup",
    "install Motion animations",
    "Motion React components setup",
    "shadcn Motion setup",
    "shadcn Motion components",

    // Tailwind / React
    "Tailwind animated components installation",
    "Tailwind CSS animation setup",
    "Tailwind CSS animations React",
    "React animated components setup",
    "React UI animation setup",
    "React component library setup",
    "React UI components installation",

    // Developer intent
    "copy paste animated React components",
    "copy paste shadcn components",
    "copy paste animated components",
    "install React components",
    "add animated components to React",
    "add animations to shadcn",
    "add Motion to shadcn",
    "shadcn components npm",
    "animated React components npm",
    "React animation library",
    "React animation component library",
  ],

  metadataBase: new URL("https://shadcn-animated.vercel.app"),

  alternates: {
    canonical: "/installation",
  },

  openGraph: {
    title: "Installation | Animated shadcn/ui Components",
    description:
      "Learn how to install animated shadcn/ui components with Motion and Tailwind CSS. Get your React project set up and start using animated components.",
    siteName: "shadcn Animated",
    type: "website",
    url: "https://shadcn-animated.vercel.app/installation",
  },

  twitter: {
    card: "summary_large_image",
    title: "Installation | Animated shadcn/ui Components",
    description:
      "Quickly install and set up animated shadcn/ui components for React using Motion and Tailwind CSS.",
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

const InstallationPage = () => {
  return (
    <div className=" flex flex-col gap-8">
      <h1 className="text-3xl">Installation</h1>
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <p className="font-medium text-lg">1. Install dependencies </p>

          <ul className="flex flex-col gap-2">
            <li>
              <span className="text-secondary-foreground">✦ </span>
              <a
                target="_blank"
                href="https://tailwindcss.com/docs/installation/framework-guides/nextjs"
                rel="noreferrer"
                className="underline text-primary"
              >
                Tailwind
              </a>
            </li>
            <li>
              <span className="text-secondary-foreground">✦ </span>
              <a
                target="_blank"
                href="https://ui.shadcn.com/docs/installation"
                rel="noreferrer"
                className="underline text-foreground"
              >
                shadcn/ui
              </a>
            </li>
            <li>
              <span className="text-secondary-foreground">✦ </span>
              <a
                target="_blank"
                href="https://motion.dev/docs/react#install"
                rel="noreferrer"
                className="underline text-foreground"
              >
                motion
              </a>
              <span className="text-secondary-foreground">
                {" "}
                optional. Only some components require motion
              </span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-6 flex-1">
            <p className="font-medium text-lg">2. Install shadcn animated</p>
            <div className="w-full flex-1">
              <Bash code="npm i shadcn-animated" />
            </div>
          </div>
        </div>

        <NextSection title="Components" link={LINKS.COMPONENTS} />
      </section>
    </div>
  );
};
export default InstallationPage;
