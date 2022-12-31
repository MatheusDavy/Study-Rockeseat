import React from 'react'
import style from './Header.module.css'
console.log(style)
export function Header(){
    return(
        <header className={style.header}>
            <img src="" alt="" />
            <strong>Ingite Feed</strong>
        </header>
    )
}