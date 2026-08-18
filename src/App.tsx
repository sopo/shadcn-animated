import "./App.css";
import Shell from "./components/shell";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <div className="bg-neutral-100 max-w-7xl mx-auto flex flex-col gap-10">
      <section className="mt-20">
        <div className="max-w-2xl mx-auto text-center flex flex-col">
          <h1 className="text-[38px] font-semibold">Animated components</h1>
          <h2 className="text-[20px] font-semibold leading-[140%] text-secondary-foreground">
            Expanding collection of animated shadcn components. You can use
            styled or un-styled. Built for React.{" "}
          </h2>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-8">
        <Shell>
          <Button className="rounded-full bg-linear-to-b from-blue-500 to-blue-600 py-6 px-8 text-lg hover:bg-blue-600 shadow-[2px_4px_12px_0_rgba(0,0,20,0.08)] border border-blue-500">
            Click me
          </Button>
        </Shell>

    <Shell>
          <div className="flex gap-4 items-center flex-col">
            <Tabs defaultValue="account" className="w-125 ">
              <TabsList>
                <TabsTrigger value="account" className="transition-all hover:bg-black/5 active:scale-99 data-active:hover:bg-background duration-500 ease-out">Account</TabsTrigger>
                <TabsTrigger value="password" className="transition-all hover:bg-black/5 active:scale-99 data-active:hover:bg-background duration-500 ease-out">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>


                 <Tabs defaultValue="account" className="w-125 ">
              <TabsList>
                <TabsTrigger value="account" >Account</TabsTrigger>
                <TabsTrigger value="password" >Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>

          </div>
        </Shell>


        <Shell>
          <div className="flex gap-4 items-center">
            <Checkbox />
            <p className="text-lg font-medium text-secondary-foreground">
              Check
            </p>
          </div>
        </Shell>

    
      </section>
    </div>
  );
}

export default App;
