import { ChevronRight } from "lucide-react";
import { LINKS } from "@/lib/links";

const Hero = () => {
  return (
    <section className="mt-40 flex flex-col gap-4 items-center">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-2 items-center">
        <Alpha />
        <h1 className="text-5xl sm:text-6xl font-medium">shadcn animated</h1>
        <h2 className="text-lg sm:text-2xl font-medium leading-[140%] text-secondary-foreground">
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

const Alpha=()=>{
  return(
  
    <div className="flex px-2 py-1 rounded-full bg-linear-to-b from-white to-primary/5 shadow-xs border border-border w-fit ">
      <p className="text-[10px] font-bold text-secondary-foreground ">ALPHA</p>
      </div>
     
  )
}