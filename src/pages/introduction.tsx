import { Link } from "react-router";

const Introduction = () => {
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="text-2xl font-medium">Introduction</h1>
      <div className="">
        <p className="font-medium text-secondary-foreground text-lg leading-[150%]">
          <span className="font-medium">shadcn animated is a growing collection of <span className="text-foreground">animated shadcn/ui components</span>,
          crafted by hand.</span> Every interaction and motion is designed to feel
          natural, refined, and effortless—bringing more life to interfaces.
          <br></br><span className="text-foreground">Copy and paste</span> the components directly into your project, or install
          them with the CLI. <br></br><br></br> <span className="text-foreground">New components are added every week.</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 py-6 border-t border-neutral-200 my-6 ">
        <p className="text-lg font-medium text-secondary-foreground">Next</p>
        <div>
      <Link to={"/installation"}  className="inline-flex items-center justify-center bg-black/3 text-foreground py-4 px-8 rounded-2xl font-normal text-md hover:bg-black/5 hover:scale-101 active:scale-99 transition-transform ease-in">Installation</Link>
      </div>
      </div>
    </div>
  );
};
export default Introduction;
