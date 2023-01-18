import { ContainerCoffesSelected, ImageCoffeSelected, InfoCoffeSelected, ButtonAmount, ContainerButton, ButtonRemoveCoffe, ContainerPrice } from "./styles"
import { Trash } from "phosphor-react"
import { useContext } from "react"
import { CoffeContext } from "../../../../context/dataCoffes"

interface CoffeSelectedProps {
    id: string
    src: string
    amount: number
    price: string
    name: string
}


export function CoffesSelected({ id, src, amount, price, name, }: CoffeSelectedProps) {

    const { deleteSelectedCoffe,  moreAmountCoffe,  lessAmountCoffe } = useContext(CoffeContext)


    const calculateTotalPrice =  Number(price.replace(',', '.')) * amount
    const converteToMoney = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculateTotalPrice)


    function handleDeleteCoffeSelected(){
        deleteSelectedCoffe(id)
    }

    function handleMoreAmountCoffe(){
        moreAmountCoffe(id)
    }

    function handLessAmountCoffe(){
        lessAmountCoffe(id)
    }

    return (
        <ContainerCoffesSelected key={id}>

            <ImageCoffeSelected src={src} alt="" />

            <InfoCoffeSelected>
                <span>{name}</span>

                <ContainerButton>

                    <ButtonAmount>
                        <button onClick={handLessAmountCoffe}>-</button>
                        <span>{amount}</span>
                        <button onClick={handleMoreAmountCoffe}>+</button>
                    </ButtonAmount>

                    <ButtonRemoveCoffe onClick={handleDeleteCoffeSelected}>
                        <Trash size={16} />
                        <span>REMOVER</span>
                    </ButtonRemoveCoffe>

                </ContainerButton>


            </InfoCoffeSelected>

            <ContainerPrice>
               {converteToMoney}
            </ContainerPrice>

        </ContainerCoffesSelected>
    )
}