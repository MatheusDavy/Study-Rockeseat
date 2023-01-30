import { createContext, ReactNode, useState } from "react";

interface ActiveAsidebarProviderProps {
    children: ReactNode
}

interface ActiveAsidebarType {
    activeAsidebar: boolean
    changeAsidebarActivate: (isActive: boolean) => void
}

export const ActiveMenuContext = createContext({} as ActiveAsidebarType)

export function ActiveAsidebarProvider({children}: ActiveAsidebarProviderProps){
    const [activeAsidebar, setActiveAsidebar] = useState(false)

    function changeAsidebarActivate(isActive: boolean){
        setActiveAsidebar(isActive)
    }

    return(
        <ActiveMenuContext.Provider
            value={{
                activeAsidebar,
                changeAsidebarActivate
            }}
        >
            {children}
        </ActiveMenuContext.Provider>

    )
}