"use client";

import { Button } from "shadcn-animated";
import { Check, Copy } from "lucide-react";
import { useState } from "react";


const Bash = ({ code }: { code: string }) => {
   const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-black/3 gap-2">
      <p className="font-code text-sm text-neutral-700 font-normal">{code}</p>

     <Button
        size="icon-lg"
        variant="outline"
        className="bg-white/60 hover:bg-white/60"
        onClick={copyCode}
      >
        {copied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
};
export default Bash
