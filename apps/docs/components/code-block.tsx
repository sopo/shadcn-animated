"use client";

import { CodeBlock } from "react-code-block";
import { Check, Copy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "shadcn-animated/button";
import { themes } from "prism-react-renderer";
import { cn } from "../../../packages/ui/src/lib/utils";

type CodeProps = {
  code: string;
  expandable?: boolean;
  filename?: string;
};

const Code = ({ code, expandable = false, filename }: CodeProps) => {
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
      <div className={`relative overflow-hidden rounded-xl bg-primary/3 `}>
        {filename && (
          <div className="flex items-center gap-1 p-2 pl-4 border-b border-border">
            <Image
              src="/assets/Typescript_logo_2020.svg.webp"
              alt="Icon"
              width={16}
              height={16}
            />
            <div className="text-sm text-secondary-foreground font-code pt-1">
              {filename}
            </div>

            <Button
              size="icon-lg"
              variant="ghost"
              className="ml-auto bg-background hover:bg-background"
              onClick={copyCode}
            >
              {copied ? <Check /> : <Copy />}
            </Button>
          </div>
        )}

        <CodeBlock.Code
          className={cn(
            "relative overflow-x-auto p-4",
            expandable && !expanded && "max-h-50 overflow-y-hidden",
          )}
        >
          <div className="table-row">
            <CodeBlock.LineNumber className="table-cell pr-4 text-right text-sm text-secondary-foreground select-none" />

            <CodeBlock.LineContent className="table-cell text-sm">
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>
        {expandable && !expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
        )}

        {expandable && (
          <Button
            variant="outline"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-secondary hover:bg-secondary rounded-full px-4"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Collapse" : "Expand"}
          </Button>
        )}
        {!expandable && (
          <Button
            size="icon-lg"
            variant="ghost"
            className="absolute top-2 right-2 bg-background hover:bg-background"
            onClick={copyCode}
          >
            {copied ? <Check /> : <Copy />}
          </Button>
        )}
      </div>
    </CodeBlock>
  );
};

export default Code;
