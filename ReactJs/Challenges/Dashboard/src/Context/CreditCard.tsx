import { createContext, ReactNode, useEffect, useState } from "react"

export interface ValueCardProps {
    name: string
    numberCard: string
    expirationDate: string
    limit: number
    flag: string | null
}

interface ChildrenProviderProps {
    children: ReactNode
}

interface CreditCardContextProps {
    isOpenModal: boolean
    creditCard_API?: ValueCardProps[]
    openCloseCloseModal: () => void
    updateCrediCardApi: (newValues: ValueCardProps) => void
    removeCreditCard: (numberCard: string) => void

}

export const CreditCardContext = createContext({} as CreditCardContextProps)

export function CreditCardProvider({ children }: ChildrenProviderProps) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [creditCard_API, setCreditData_API] = useState<ValueCardProps[]>([])

    function openCloseCloseModal() {
        setIsOpenModal(!isOpenModal)
    }

    function updateCrediCardApi(newValues: ValueCardProps) {
        let newValue = creditCard_API
        newValue.push(newValues)
        setCreditData_API(newValue)
    }

    function removeCreditCard(numberCard: string){

        const newValue = creditCard_API.filter(cardValues => {
            if(cardValues.numberCard != numberCard){
                return cardValues
            }
        })
        setCreditData_API(newValue)
    }

    return (
        <CreditCardContext.Provider
            value={{
                isOpenModal,
                creditCard_API,
                openCloseCloseModal,
                updateCrediCardApi,
                removeCreditCard
            }}
        >
            {children}
        </CreditCardContext.Provider>
    )
}