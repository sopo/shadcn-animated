import type { Metadata } from "next";

import NextSection from "@/components/next-section";
import { LINKS } from "@/lib/links";
import Bash from "@/components/bash";

export const metadata: Metadata = {
  title: "Installation",
};

const InstallationPage = () => {
  return (
    <div className=" flex flex-col gap-8">
      <h1 className="text-3xl">Installation</h1>
      <section className="flex flex-col gap-6">
        <div className="flex gap-6">
          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <p className="font-medium text-secondary-foreground">1</p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <p className="font-medium text-lg text-secondary-foreground">
              Install dependencies{" "}
            </p>

            <ol className="flex flex-col gap-2">
              <li>
                <span>1. </span>
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
                <span>2. </span>
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
                <span>3. </span>
                <a
                  target="_blank"
                  href="https://ui.shadcn.com/docs/installation"
                  rel="noreferrer"
                  className="underline text-foreground"
                >
                  motion
                </a>
                <span className="text-secondary-foreground"> (only components marked with * require motion)</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <p className="font-medium text-secondary-foreground">2</p>
          </div>
          <div className="flex flex-col gap-4 flex-1">
          <p className="font-medium text-lg text-secondary-foreground">
            Install shadcn animated
          </p>
          <div className="w-full flex-1">
          <Bash code="npm i shadcn-animated"/>
          </div>
          </div>
        </div>

     
        <NextSection title="Components" link={LINKS.COMPONENTS} />
      </section>
    </div>
  );
};
export default InstallationPage;
