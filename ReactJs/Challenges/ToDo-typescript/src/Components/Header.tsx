import React from "react";
import style from './Header.module.css'
import logo from "../assets/logo.svg"


export function Header(){
    return(
        <header className={style.header}>
            <img src={logo} alt="" />
        </header>
    )
}