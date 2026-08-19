import "./App.css";
import Shell from "./components/shell";
import { Button } from "./components/ui/button";

import {
  AnimatedTabs,
  AnimatedTabsContent,
  AnimatedTabsList,
  AnimatedTabsTrigger,
} from "./components/animated-tabs";
import Hero from "./components/landing/hero";

function App() {
  return (
    <div className="px-4">
    <div className="max-w-4xl mx-auto flex flex-col gap-20">
      <Hero />
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-2">
        <Shell>
          <Button className="bg-white text-black hover:bg-white rounded-full py-6 px-8 shadow-[2px_4px_12px_0_rgba(0,0,20,0.08)]">
            Click me
          </Button>
        </Shell>

        <Shell>
          <div className="flex gap-4 items-center flex-col">
            <AnimatedTabs
              defaultValue="account"
              className="flex flex-col items-center"
            >
              <AnimatedTabsList>
                <AnimatedTabsTrigger value="account">
                  Account
                </AnimatedTabsTrigger>

                <AnimatedTabsTrigger value="password">
                  Password
                </AnimatedTabsTrigger>
              </AnimatedTabsList>

              <AnimatedTabsContent value="account" className="text-center">
               <p className="text-secondary-foreground">Make changes to your account here.</p> 
              </AnimatedTabsContent>

              <AnimatedTabsContent value="password">
               <p className="text-secondary-foreground">Change your password here.</p> 
              </AnimatedTabsContent>
            </AnimatedTabs>
          </div>
        </Shell>
         <Shell>
          <Button className="bg-white text-black rounded-full py-6 px-8 shadow-[2px_4px_12px_0_rgba(0,0,20,0.08)]">
            Click me
          </Button>
        </Shell>
         <Shell>
          <Button className="bg-white text-black rounded-full py-6 px-8 shadow-[2px_4px_12px_0_rgba(0,0,20,0.08)]">
            Click me
          </Button>
        </Shell>
      </section>
    </div>
    </div>
  );
}

export default App;
