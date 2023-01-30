import { AsidebarContainer, CloseAsidebar, LinksNav, ListContainer, LogoContainer } from "./styles"
import {IoMdClose} from 'react-icons/io'
import { useContext, useState } from "react"
import { links } from "../../data/links"
import {Link, NavLink} from 'react-router-dom'


// Components Styled
import { LinksContainer } from "./styles"
import { ActiveMenuContext } from "../../Context/ActiveAsidebar"

export function Asidebar(){

    const {activeAsidebar, changeAsidebarActivate} = useContext(ActiveMenuContext)

    function handleActiveAsidebar(){
        changeAsidebarActivate(false)
    }

    return(
        <AsidebarContainer isActive={activeAsidebar}>

            <CloseAsidebar onClick={handleActiveAsidebar}>
                <IoMdClose size={34}/>
            </CloseAsidebar>
            
            <LogoContainer>
                LOGO
            </LogoContainer>

            <LinksContainer>
                {links.map( link => {
                    return (
                        <LinksNav key={link.title}>
                            <h4>{link.title}</h4>
                            <ListContainer>
                                {link.links.map( sublinks => {
                                   return(
                                    <li key={sublinks.name}>
                                        <NavLink to={`/${sublinks.name}`}>
                                            {sublinks.icon} {sublinks.name}
                                        </NavLink>
                                    </li>
                                   ) 
                                })}
                            </ListContainer>
                        </LinksNav>
                    )
                } ) }
            </LinksContainer>


        </AsidebarContainer>
    )
}