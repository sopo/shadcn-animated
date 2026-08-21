import "./App.css";
import { Button } from "./components/ui/button";

import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import Hero from "./domain/components/hero";
import Shell from "./domain/components/shell";

function App() {
  return (
    <div className="px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Hero />
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-2">
          <Shell>
            <Button
              variant="default"
              className="rounded-full h-10 px-6 hover:bg-primary "
            >
              Click me
            </Button>
          </Shell>
          <Shell>
            <Tabs defaultValue="account" className="w-full ">
              <TabsList className="rounded-full">
                <TabsTrigger value="account" className="rounded-full">
                  Account
                </TabsTrigger>
                <TabsTrigger value="password" className="rounded-full">
                  Password
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </Shell>
        </section>
      </div>
    </div>
  );
}

export default App;
