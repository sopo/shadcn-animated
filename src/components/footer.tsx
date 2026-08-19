import { Link } from "react-router"

const Footer=()=>{
    return(
        <footer className="max-w-4xl grid grid-cols-2 mx-auto mt-20 gap-4 w-full px-4">
            {/* <h2 className="text-xl fomt-medium text-secondary-foreground">Handcrafted motion</h2> */}
            <nav className="flex flex-col gap-2">
                <p className="text-xs font-medium">Links</p>
                <Link to="/docs" className="text-xs text-secondary-foreground hover:underline">Docs</Link>

                
            </nav>
        </footer>
    )
}
export default Footer