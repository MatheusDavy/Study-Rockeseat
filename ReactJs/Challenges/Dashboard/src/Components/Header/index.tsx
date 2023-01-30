import { ChangeTheme } from "./ChangeTheme";
import { ButtonMenu, ButtonNavigation, HeaderContainer, NavigateContainer, NavbarLink, ProfileContainer, ButtonProfile, PopupProfile } from "./styles";
import { CgMenuGridO } from 'react-icons/cg'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'
import {AiFillCaretDown} from 'react-icons/ai'
import { useContext, useState } from "react";
import { ActiveMenuContext } from "../../Context/ActiveAsidebar";
import { Languages } from "./SelectLanguage";
import { useTranslation } from "react-i18next";

export function Header(){

    const {t} = useTranslation()
    

    const {changeAsidebarActivate} = useContext(ActiveMenuContext)

    const [isActivePopupProfile, setActivePopupProfile] = useState(false)

    function handleActiveAsidebar(){
        changeAsidebarActivate(true)
    }

    function handleActivePopupProfile(){
        setActivePopupProfile(!isActivePopupProfile)
    }

    return(
        <HeaderContainer>

            <div className="container">
                <ButtonMenu onClick={handleActiveAsidebar}>
                    <CgMenuGridO />
                </ButtonMenu>   


                <NavigateContainer>

                    <ButtonNavigation>
                        <FiShoppingCart size={20} />
                    </ButtonNavigation>

                    <NavbarLink to={'/chat'}>
                        <BsChatLeft  size={20}/>
                        <div className="amount">
                            20
                        </div>
                    </NavbarLink>

                    <NavbarLink to={'/chat'}>
                        <IoNotificationsOutline size={20} />
                        <div className="amount">
                            20
                        </div>
                    </NavbarLink>

                    <ProfileContainer>
                        <ButtonProfile onClick={handleActivePopupProfile}>
                            <img src="data:image/jpeg;base64,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" alt="profile image" className="profile__image"/>
                            <p>{t('hi')}, <strong>Gaby</strong></p>
                            <AiFillCaretDown size={10} className={isActivePopupProfile === true ? 'active' : ''}/>
                        </ButtonProfile>

                        <PopupProfile isActive={isActivePopupProfile}>
                            <Languages />
                            <ChangeTheme />

                        </PopupProfile>
                    </ProfileContainer>


                </NavigateContainer>
            </div>


        </HeaderContainer>
    )
}