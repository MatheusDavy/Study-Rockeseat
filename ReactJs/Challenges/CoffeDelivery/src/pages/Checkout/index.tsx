import { ContainerCheckout, AsideContainer, NullCart } from "./styles"
import { CoffesSelected } from "./components/CardCoffesSelected"
import { useContext } from "react"
import { CoffeContext } from "../../context/dataCoffes"
import { TotalPrice } from "./components/TotalPrice"
import { MaskSad, SmileySad } from "phosphor-react"
import { DataUser } from "./components/DataUser/index"



export function Checkout() {

    const { coffesSelected } = useContext(CoffeContext)


    return (
        <ContainerCheckout>
            <DataUser/>

            <AsideContainer >
                {coffesSelected.map(coffe => {
                    return (
                        <CoffesSelected
                            id={coffe.id}
                            name={coffe.name}
                            src={coffe.image}
                            price={coffe.price}
                            amount={coffe.amount}
                        />
                    )
                })}
                {coffesSelected.length > 0 && 
                    <TotalPrice />
                }
                {coffesSelected.length == 0 && 
                    <NullCart>
                       <SmileySad size={32}/>  Seu carrinho está vazio !
                    </NullCart>
                }
            </AsideContainer >

        </ContainerCheckout>
    )
}