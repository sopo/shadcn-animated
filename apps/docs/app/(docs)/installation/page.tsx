import type { Metadata } from "next";

import NextSection from "@/components/next-section";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Installation",
};

const InstallationPage = () => {
  return (
    <div className=" flex flex-col gap-8">
      <h1 className="text-3xl">Installation</h1>
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <p className="font-medium text-secondary-foreground">1</p>
          </div>
          <p className="font-medium text-lg text-secondary-foreground">
            Install{" "}
            <a
              target="_blank"
              href="https://tailwindcss.com/docs/installation/framework-guides/nextjs"
              rel="noreferrer"
              className="underline text-primary"
            >
              Tailwind
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <p className="font-medium text-secondary-foreground">2</p>
          </div>
          <p className="font-medium text-lg text-secondary-foreground">
            Install{" "}
            <a
              target="_blank"
              href="https://ui.shadcn.com/docs/installation"
              rel="noreferrer"
              className="underline text-foreground"
            >
              shadcn/ui
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <p className="font-medium text-secondary-foreground">3</p>
          </div>
          <p className="font-medium text-lg text-secondary-foreground">
            Install
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <p className="font-medium text-secondary-foreground">4</p>
          </div>
          <p className="font-medium text-lg text-secondary-foreground">Use</p>
        </div>
        <NextSection title="Components" link={LINKS.COMPONENTS} />
      </section>
    </div>
  );
};
export default InstallationPage;
