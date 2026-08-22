import type { ReactNode } from "react";

import Sidenav from "@/components/sidenav";

export default function DocsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="mx-auto mt-24 grid max-w-4xl grid-cols-1 gap-8 px-4 sm:grid-cols-4">
  <aside className="hidden sm:block sm:col-span-1">
    <div className="sticky top-24">
      <Sidenav />
    </div>
  </aside>

  <main className="min-w-0 sm:col-span-3">
    {children}
  </main>
</div>
    // <div className="mx-auto mt-24 grid max-w-4xl grid-cols-1 gap-8 px-4 md:grid-cols-4">
    //   <Sidenav />
    //   <main className="md:col-span-3 min-w-0">{children}</main>
    // </div>
  );
}
