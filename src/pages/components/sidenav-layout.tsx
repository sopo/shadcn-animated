
import { NavLink, Outlet } from "react-router"

const SidenavLayout:React.FC=()=>{
    // const navClass=`text-sm text-secondary-foreground py-2 px-4 rounded-lg hover:bg-neutral-200`
       const navClass = ({ isActive }: { isActive: boolean }) =>
        `text-sm py-2 px-4 rounded-lg transition-colors ${
            isActive
                ? " text-neutral-900"
                : "text-secondary-foreground hover:bg-black/3"
        }`
    return(
        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 font-flex ">
            <aside className="">
                <nav className="flex flex-col gap-4">
                    <div className="flex flex-col">
                    <h2 className="text-xs text-secondary-foreground px-4 py-2">DOCS</h2>
                    <NavLink to={"docs"} className={navClass}>Overview</NavLink>
                    <NavLink to={"docs"} className={navClass}>Installation</NavLink>
                    </div>
                    <div className="flex flex-col">
                    <h2 className="text-xs text-secondary-foreground px-4 py-2">COMPONENTS</h2>
                    <NavLink to={"button"} className={navClass}>Button</NavLink>
                    <NavLink to={"tabs"} className={navClass}>Tabs</NavLink>
                    </div>
                </nav>
            </aside>
            <main className="col-span-3">
                <Outlet />
            </main>
        </div>
    )
}
export default SidenavLayout