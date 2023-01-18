import { CoffeContainer, ImageCoffe, InformationContainer, AddRemoveContainer, PriceContainer, AddToCart, ContainerButtons } from "./styles"
import { ShoppingCart } from "phosphor-react"

import { useContext } from "react"

import { CoffeContext, CoffeProps } from "../../../../context/dataCoffes"

export function CoffeCards({image, name, description, price, amount, id,informations}: CoffeProps) {

    const { moreAmountCoffe, lessAmountCoffe, addCoffesToCart } = useContext(CoffeContext)
    
    function handleMoreCoffeAmount(){
        moreAmountCoffe(id)
    }
    function handleLessCoffeAmount(){
        lessAmountCoffe(id)
    }
    function handleAddCoffeToCart(){
        addCoffesToCart(id)
    }

    return (
        <CoffeContainer key={id}>
            <ImageCoffe src={image} alt="" />
            <InformationContainer>
                {informations.map((info)=>{
                    return <div key={info}>{info}</div>
                })}
            </InformationContainer>
            <h2>{name}</h2>
            <p>{description}</p>

            <ContainerButtons>

                <PriceContainer>
                    <span>R$</span>
                    {price}
                </PriceContainer>

                <AddRemoveContainer>
                    <button onClick={handleLessCoffeAmount}>
                        -
                    </button>
                    <span>{amount}</span>
                    <button onClick={handleMoreCoffeAmount}>
                        +
                    </button>
                </AddRemoveContainer>

                <AddToCart onClick={handleAddCoffeToCart}>
                    <ShoppingCart size={22}/>
                </AddToCart>
            </ContainerButtons>
        </CoffeContainer>
    )
}