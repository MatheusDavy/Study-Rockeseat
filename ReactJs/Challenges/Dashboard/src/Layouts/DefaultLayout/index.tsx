import { Outlet } from "react-router-dom";
import { Asidebar } from "../../Components/Asidebar";
import { Header } from "../../Components/Header";

import { LayoutContainer } from "./styles";

export function DefaultLayout(){

    return(

        <LayoutContainer>
            <Header /> 
            <Asidebar />

            <Outlet />
        </LayoutContainer>

    )

}