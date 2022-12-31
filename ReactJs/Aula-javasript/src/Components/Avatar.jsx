import style from './Avatar.module.css'
export function Avatar({hasBorder, source}){
    return <img src={source} alt="" className={hasBorder ? style.avatarWithBorder : style.avatar}/>
}