
"use client"
import { CodeBlock } from 'react-code-block';
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from 'shadcn-animated/button';
import { themes } from 'prism-react-renderer';

const Code=({code}:{code:string})=>{
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

    return(
        <CodeBlock code={code} language={"tsx"}   theme={themes.vsLight}>
      <div className="relative overflow-hidden rounded-xl ">
        <CodeBlock.Code className="bg-primary/3 p-6 rounded-xl shadow-lg overflow-x-auto">
          <div className="table-row">
            <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-secondary-foreground text-right select-none" />
            <CodeBlock.LineContent className="table-cell text-sm">
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>

           <Button
        size="icon-lg"
        variant="outline"
        className="bg-background hover:bg-background absolute right-4 top-4"
        onClick={copyCode}
      >
        {copied ? <Check /> : <Copy />}
      </Button>
      </div>
    </CodeBlock>
    )
}
export default Code


