import type { PropsWithChildren } from "react";

const DocsSection: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className="flex flex-col gap-8">{children}</section>;
};
export default DocsSection;
