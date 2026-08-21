import "./App.css";
import { buttonProps } from "./domain/components/button/button";
import ButtonPreview from "./domain/components/button/button-preview";
import Hero from "./domain/components/hero";
import Shell from "./domain/components/shell";
import { tabsProps } from "./domain/components/tabs/tabs";
import TabsPreview from "./domain/components/tabs/tabs-preview";


function App() {
  return (
    <div className="px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Hero />
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-2">
          <Shell props={buttonProps}>
            <ButtonPreview />
          </Shell>
          <Shell props={tabsProps}>
           <TabsPreview />
          </Shell>
        </section>
      </div>
    </div>
  );
}

export default App;


