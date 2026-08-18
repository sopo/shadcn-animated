import type { PropsWithChildren } from "react"

const Shell:React.FC<PropsWithChildren>=({children})=>{

        return(
            <div className="h-75 bg-white rounded-2xl flex items-center justify-center">
                {children}
            </div>
        )
}
export default Shell