import "./App.css";

import { Button } from "./components/ui/button";

import Hero from "./components/domain/hero";
import Shell from "./components/domain/shell";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <div className="px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Hero />
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-2">
          <Shell>
            <Tabs defaultValue="account" className="w-[400px] ">
              <TabsList className="">
                <TabsTrigger value="account" className="" >Account</TabsTrigger>
                <TabsTrigger value="password"  className="">Password</TabsTrigger>
                <TabsTrigger value="asd"  className="">
                tab 3
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
              <TabsContent value="asd">
                Change your passwosdaasdrd here.
              </TabsContent>
            </Tabs>
          </Shell>

          <Shell>
            <Button className="bg-white text-black hover:bg-white rounded-full py-6 px-8 shadow-[2px_4px_12px_0_rgba(0,0,20,0.08)]">
              Click me
            </Button>
          </Shell>

          <Shell>
            <Button variant="default" className="rounded-full h-12 px-6">
              Click me
            </Button>
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
