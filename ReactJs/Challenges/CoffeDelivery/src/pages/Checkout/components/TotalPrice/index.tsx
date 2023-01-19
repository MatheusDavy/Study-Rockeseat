import React, { useContext, useEffect, useState } from "react"
import { useForm, useFormContext } from "react-hook-form"
import { CoffeContext } from "../../../../context/dataCoffes"
import { UserDataContext } from "../../../../context/userDataForm"
import { ContainerTotalPrice, ContainerInfoTotal, TotalPriceContainer, ButtonSendOrder  } from "./style"

interface TotalsPriceProps {
    totalPrice: string
    deliveryPrice: string
    deliveryMoreTotalPrice: string
}

export function TotalPrice(){
    const {coffesSelected} = useContext(CoffeContext)
    const {updateTotalPrice} = useContext(UserDataContext)

    //Criar um createContext para essas propriedades
    const deliveryPriceFixed = 3.00
    const [totalsPrice, setTotalsPrice] = useState<TotalsPriceProps>({
        totalPrice: "",
        deliveryPrice: "",
        deliveryMoreTotalPrice: "",
    })

    //Update All Prices
    useEffect(()=>{
        let totalPrice = 0
        coffesSelected.map( coffe => {
            const calculateTotalPrice =  Number(coffe.price.replace(',', '.')) * coffe.amount
            totalPrice += calculateTotalPrice
        })

        const totalDeliveryMoreCoffeNum = totalPrice + deliveryPriceFixed 

        
        const totalCoffe = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)
        const deliveryPrice = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(deliveryPriceFixed)
        const totalDeliveryMoreCoffe = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalDeliveryMoreCoffeNum)
        setTotalsPrice({
            totalPrice: totalCoffe,
            deliveryPrice: deliveryPrice,
            deliveryMoreTotalPrice: totalDeliveryMoreCoffe,
        })

    }, [coffesSelected, deliveryPriceFixed])
    ////////////////////////////////////////////////////////////////////////

    //Send Total Price
    useEffect(()=>{
        updateTotalPrice(totalsPrice.deliveryMoreTotalPrice)
    }, [totalsPrice])


    return(
        <ContainerTotalPrice>
            <ContainerInfoTotal>
                <p>Total de itens</p>

                <span>{totalsPrice.totalPrice}</span>
            </ContainerInfoTotal>

            <ContainerInfoTotal>
                <p>Entrega</p>
                <span>{totalsPrice.deliveryPrice}</span>
            </ContainerInfoTotal>

            <TotalPriceContainer >
                <p>TOTAL</p>
                <span>{totalsPrice.deliveryMoreTotalPrice}</span>
            </TotalPriceContainer >

            <ButtonSendOrder className={coffesSelected.length > 0 ? `` : `disabled`} form='form-data-use' type='submit'>
                CONFIRMAR PEDIDO
            </ButtonSendOrder>

        </ContainerTotalPrice>
    )
}