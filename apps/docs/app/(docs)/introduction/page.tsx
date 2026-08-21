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
        <p className="font-medium text-secondary-foreground text-lg leading-[150%]">
          <span className="font-medium"><span className="text-foreground">shadcn animated</span> is a growing collection of <span className="text-foreground">animated shadcn/ui components</span>,
          crafted by hand.</span> Every interaction and motion is designed to feel
          natural, refined, and effortless—bringing more life to interfaces.
          <br></br><span className="text-foreground">Copy and paste</span> the components directly into your project, or install
          them with the CLI. <br></br><br></br> <span className="text-foreground">New components are added every week.</span>
        </p>
      </div>
      <NextSection title="Installation" link={LINKS.INSTALLATION} />
    </div>
  );
};
export default IntroductionPage;
