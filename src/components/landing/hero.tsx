import { Link } from "react-router";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="mt-40 flex flex-col gap-4 items-center">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-2">
        <h1 className="text-3xl font-medium font-flex">Handcrafted motion</h1>
        <h2 className="text-2xl font-medium leading-[140%] text-secondary-foreground font-flex">
          Expanding collection of <span className="text-foreground">animated shadcn components</span>, crafted by hand
        </h2>
      </div>
      <div>
        {/* <Button className="text-md font-medium bg-neutral-200 text-foreground rounded-full py-6 px-8 hover:bg-neutral-300">
          GitHub
        </Button> */}
        <Link to="/" className="text-[#3383EF] flex items-center hover:underline">GitHub <ChevronRight size={16}/></Link>
      </div>
    </section>
  );
};
export default Hero;
