import { HeaderContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import{ ShoppingCart, MapPin }from 'phosphor-react'
import { useContext } from "react";

import { CoffeContext } from "../../context/dataCoffes";
import { SearchComponent } from "../SearchInput";

export function Header() {
    const {coffesSelected} = useContext(CoffeContext)

    return (
        <HeaderContainer>
            <Link to={'/'}>
                <img src={logo} alt="" />
            </Link>


            <SearchComponent />


            <div className="informations">
                <div className="locale">
                    <MapPin size={22} />
                    Porto Alegre - RS
                </div>

                

                <Link to='checkout'>
                    <ShoppingCart size={22} />
                    {coffesSelected.length > 0 &&  <div className="markTotalItens">{coffesSelected.length}</div>}
                </Link>
            </div>
        </HeaderContainer>
    )
}