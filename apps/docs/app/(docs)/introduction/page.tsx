import type { Metadata } from "next";

import NextSection from "@/components/next-section";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Introduction",
};

const IntroductionPage = () => {
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="text-3xl font-medium">Introduction</h1>
      <div className="">
        <p className="text-secondary-foreground leading-[150%]">
          <span><span className="text-foreground">shadcn animated</span> is a growing collection of <span className="text-foreground">animated shadcn/ui components</span>,
          crafted by hand.</span>
          <br></br><span className="text-foreground">Copy and paste</span> the components directly into your project, or install
          them with the CLI. <br></br><br></br> <span className="text-foreground">New components are added weekly.</span>
        </p>
      </div>
      <NextSection title="Installation" link={LINKS.INSTALLATION} />
    </div>
  );
};
export default IntroductionPage;
