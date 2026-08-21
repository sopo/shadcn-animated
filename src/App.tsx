import "./App.css";
import ButtonPreview from "./domain/components/button/button-preview";
import Hero from "./domain/components/hero";
import Shell from "./domain/components/shell";
import TabsPreview from "./domain/components/tabs/tabs-preview";
import { buttonProps } from "./domain/static.tsx/components";

function App() {
  return (
    <div className="px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Hero />
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-2">
          <Shell props={buttonProps}>
            <ButtonPreview />
          </Shell>
          <Shell props={buttonProps}>
           <TabsPreview />
          </Shell>
        </section>
      </div>
    </div>
  );
}

export default App;


