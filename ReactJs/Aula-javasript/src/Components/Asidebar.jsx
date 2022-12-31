import style from './Asidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Asidebar(){
    return(
        <aside className={style.asidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
            <div className={style.profileContainer}>
                <Avatar 
                    source='https://avatars.githubusercontent.com/u/89926802?s=40&v=4' 
                    hasBorder 
                />
                <strong className={style.profileName}>Matheus Davy</strong>
                <span className={style.profileStatus}>Front-End Developer</span>
            </div>

            <footer>
            
                <a href="">
                    <PencilLine size={20} /> 
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}