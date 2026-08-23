import { ChevronRight } from "lucide-react";
import { LINKS } from "@/lib/links";

const Hero = () => {
  return (
    <section className="mt-40 flex flex-col gap-4 items-center">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-2">
        <h1 className="text-6xl font-medium">shadcn animated</h1>
        <h2 className="text-2xl font-medium leading-[140%] text-secondary-foreground">
          Expanding collection of{" "}
          <span className="text-foreground">animated shadcn components</span>,
          crafted by hand
        </h2>
      </div>
      <div>
        <a
          target="_blank"
          href={LINKS.GITHUB}
          rel="noreferrer"
          className="linkClass"
        >
          GitHub <ChevronRight size={16} />
        </a>
      </div>
    </section>
  );
};
export default Hero;
