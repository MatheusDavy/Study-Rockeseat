import React from 'react'
import { ImgHTMLAttributes } from 'react'
import style from './Avatar.module.css'

//Quando temos uma propriedade opicional, nós adicionamos o -  ?  

//Uma imagem possui muitos atributos, e ficar adicionando manualmente demoraria muito tempo
//então importamos o {ImgHTMLAttributes} e extendemos ele na interface abrindo uma tag e colocando o tipo
//de elemento que queremos pegar os atributos, e assim importamos direto as propriedades sem ficar adicionando
//manualmente na interface
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean,
}

//Além da propriedade acima, podemos fazer também um spreadOperator, para usarmos as propriedades que são atribuidas aos componentes
//sem precisar importar uma a uma
export function Avatar({hasBorder = true, ...props /* <- spread operator*/}: AvatarProps){
    return <img className={hasBorder ? style.avatarWithBorder : style.avatar} {...props}/>
}