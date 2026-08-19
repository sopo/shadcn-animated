import { NavLink } from "react-router"
import { Button } from "./ui/button"
import { MoveUpRight } from "lucide-react"

const Header=()=>{
    return(
        <header className="fixed top-0 left-0 z-50 w-full bg-background/20 backdrop-blur-md font-flex">
            <section className="max-w-4xl mx-auto flex p-4 justify-between">
            <nav className="flex gap-4  items-center">
                <NavLink to={"/"} className="text-secondary-foreground text-sm hover:text-primary">Home</NavLink>
                <NavLink to={"/button"} className="text-secondary-foreground text-sm hover:text-primary">Docs</NavLink>
                <NavLink to={"/button"} className="text-secondary-foreground text-sm hover:text-primary">Components</NavLink>

            </nav>
              <Button size="lg" className="rounded-full px-4 bg-[#3383EF]/5 text-[#3383EF] hover:bg-[#3383EF]/10 font-normal">GitHub</Button>
          </section>
        </header>
    )
}
export default Header