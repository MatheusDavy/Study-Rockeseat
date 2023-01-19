import { useContext, useEffect, useState } from "react"
import { CoffeContext } from "../../context/dataCoffes"
import { useParams } from "react-router-dom"
import { ContainerSearchInput } from "./styles"


export function SearchComponent(){

    const { search, updateSearchValue }= useContext(CoffeContext)

    function handleUpdateSearchValue(){
        const value = event.target.value
        updateSearchValue(value)
    }

    const {checkout} = useParams()

    return(      
        <>
            {!checkout &&
                <ContainerSearchInput
                type="text"
                value={search}
                onChange={handleUpdateSearchValue} 
                placeholder={'Buscar'}
            />
            }
        </>

    )

}