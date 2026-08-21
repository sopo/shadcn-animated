import type { ReactNode } from "react";

import Sidenav from "@/components/sidenav";

export default function DocsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="mx-auto mt-24 grid max-w-4xl grid-cols-1 gap-8 px-4 md:grid-cols-4">
      <Sidenav />
      <main className="md:col-span-3">{children}</main>
    </div>
  );
}
