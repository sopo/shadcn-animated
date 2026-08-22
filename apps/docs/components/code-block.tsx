"use client";

import { CodeBlock } from "react-code-block";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "shadcn-animated/button";
import { themes } from "prism-react-renderer";

const Code = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
    <CodeBlock code={code} language="tsx" theme={themes.vsLight}>
      <div className="relative overflow-hidden rounded-xl">
        <CodeBlock.Code
          className={`bg-primary/3 rounded-xl p-6 shadow-lg overflow-x-auto transition-[max-height] duration-300 ${
            expanded ? "max-h-none" : "max-h-50"
          }`}
        >
          <div className="table-row">
            <CodeBlock.LineNumber className="table-cell pr-4 text-right text-sm text-secondary-foreground select-none" />

            <CodeBlock.LineContent className="table-cell text-sm">
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>

        <Button
          size="icon-lg"
          variant="outline"
          className="absolute top-4 right-4 bg-background hover:bg-background"
          onClick={copyCode}
        >
          {copied ? <Check /> : <Copy />}
        </Button>

        <Button
          variant="outline"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? (
            <>
              <ChevronUp />
              Collapse
            </>
          ) : (
            <>
              <ChevronDown />
              Expand
            </>
          )}
        </Button>
      </div>
    </CodeBlock>
  );
};

export default Code;
