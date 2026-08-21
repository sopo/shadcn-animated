import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";


const Bash = ({ code }: { code: string }) => {
  const copyCode = () => {
    console.log("copied");
  };
  return (
    <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-black/3 gap-2">
      <p className="font-code text-neutral-600 font-normal">{code}</p>

      <Button
        size="icon-lg"
        variant={`outline`}
        className={`bg-white/60 hover:bg-white/60`}
      >
        <Copy />
        {/* {state.value ? 'Copied!' : 'Copy code'} */}
      </Button>
    </div>
  );
};
export default Bash