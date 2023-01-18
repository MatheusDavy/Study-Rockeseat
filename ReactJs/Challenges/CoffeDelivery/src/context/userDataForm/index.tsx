import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export interface CoffeProps {
    id: string;
    image: string
    informations: string[]
    name: string;
    description: string;
    price: string;
    amount: number;
    isSelected: true | false;
  }

interface UserDataProps {
    street: string
    neighboorhood: string
    complement: string
    cep: string
    number: number
    payment: string
    coffes: CoffeProps
}

interface UserDataContextType {
  dataUser: UserDataProps | undefined
  totalPrice: string
  updateDataUser: (data: UserDataProps)=> void
  updateTotalPrice: (data: string)=> void

}

interface CoffeContextProviderProps {
  children: ReactNode
}

export const UserDataContext = createContext({} as UserDataContextType )

export function UserDataFormProvider({ children }: CoffeContextProviderProps){
    const [dataUser, setDataUser] = useState<UserDataProps>()

    const [totalPrice, setTotalPrice] = useState('')

    function updateDataUser(data: UserDataProps){
      setDataUser(data)
    }

    function updateTotalPrice(price: string){
      setTotalPrice(price)
    }

    

    return(
        <UserDataContext.Provider
          value={{
              dataUser,
              totalPrice,
              updateDataUser,
              updateTotalPrice
            }}
        >
        {children}
        </UserDataContext.Provider>
    )
}