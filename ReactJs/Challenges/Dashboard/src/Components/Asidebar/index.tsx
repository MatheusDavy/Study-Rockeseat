import { AsidebarContainer, LinksContainer, LogoContainer, LinksNavContainer, Links } from "./styles"

// Icons
import { HiHome } from 'react-icons/hi'
import {BsFillCreditCard2BackFill} from 'react-icons/bs'

// Datas
import { linksNav } from "../../Data/Asidebar"

export function Asidebar() {


    return (
        <AsidebarContainer>

            <LogoContainer>
                DASHBOARD
            </LogoContainer>

            <LinksContainer>

                <LinksNavContainer>
                    {linksNav.map((link) => (
                        <li key={link.name}>
                            <Links to={link.link}>
                                <div className="icon--container">
                                    {link.icone}
                                </div>

                                <span>{link.name}</span>
                            </Links>
                        </li>
                    ))}
                </LinksNavContainer>

            </LinksContainer>

        </AsidebarContainer>
    )
}