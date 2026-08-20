"use client";

import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/kibo-ui/code-block";

export const title = "Header composition";

const code = [
  {
    language: "typescript",
    filename: "middleware.ts",
    code: `import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next();
}`,
  },
];

const Example = () => (
  <div className="w-full max-w-md">
    <CodeBlock data={code} defaultValue="typescript">
      <CodeBlockHeader className="justify-between">
        <CodeBlockFiles>
          {(item) => (
            <CodeBlockFilename key={item.language} value={item.language}>
              {item.filename}
            </CodeBlockFilename>
          )}
        </CodeBlockFiles>
        <CodeBlockCopyButton />
      </CodeBlockHeader>
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem key={item.language} value={item.language}>
            <CodeBlockContent language={item.language as BundledLanguage}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  </div>
);

export default Example;
