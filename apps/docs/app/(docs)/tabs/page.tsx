import type { Metadata } from "next";

import TabsDocs from "@/components/tabs/tabs-docs";

export const metadata: Metadata = {
  title: "Tabs",
};

export default function TabsPage() {
  return <TabsDocs />;
}
