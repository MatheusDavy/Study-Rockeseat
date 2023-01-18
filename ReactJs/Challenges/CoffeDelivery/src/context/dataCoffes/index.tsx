import { createContext, useState, ReactNode, useEffect } from "react";
import nextId from "react-id-generator";

export interface CoffeProps {
  id: string;
  image: string
  informations: string[]
  name: string;
  description: string;
  price: string;
  amount: number;
  isSelected: true | false;
}[]

interface CoffeContextProviderProps {
  children: ReactNode
}

interface CoffeContextType {
  coffes: CoffeProps[]
  filteredCoffes: CoffeProps[]
  search: string
  coffesSelected: CoffeProps[]
  moreAmountCoffe: (id: string) => void
  lessAmountCoffe: (id: string) => void
  addCoffesToCart: (id: string) => void
  deleteSelectedCoffe: (id: string) => void
  updateSearchValue: (id: string) => void
}

export const CoffeContext = createContext({} as CoffeContextType)

export function DataCoffeProvider({ children }: CoffeContextProviderProps) {
  const [coffes, setCoffes] = useState<CoffeProps[]>([
    {
      id: nextId(),
      image: '',
      informations: [
        'INFORMATIONS',
        'INFORMATION',
      ],
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: "9,00",
      amount: 1,
      isSelected: false,
    },
    {
      id: nextId(),
      image: '',
      informations: [
        'INFORMATIONS',
      ],
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: "10,00",
      amount: 1,
      isSelected: false,
    },
    {
      id: nextId(),
      image: '',
      informations: [
        'INFORMATIONS',
        'INFORMATION',
        'INFORMATIO'
      ],
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: "15,00",
      amount: 1,
      isSelected: false,
    },
  ]);
  const [coffesSelected, setCoffesSelected] = useState<CoffeProps[]>([])

  const [search, setSearch] = useState('')

  const lowercaseSearch = search.toLowerCase()

  const filteredCoffes = coffes.filter((coffe)=>{
    return coffe.name.toLowerCase().includes(lowercaseSearch)
  })

  function updateSearchValue(searchContent : string){
    setSearch(searchContent)
  }

  function moreAmountCoffe(id: string) {
    const newCoffeAmount = coffes.map((coffe) => {
      if (coffe.id === id) {
        return {
          ...coffe, amount: coffe.amount + 1
        }
      } else {
        return coffe
      }
    })
    setCoffes(newCoffeAmount)
  }

  function lessAmountCoffe(id: string) {
    const newCoffeAmount = coffes.map((coffe) => {
      if (coffe.id === id && coffe.amount > 1) {
        return {
          ...coffe, amount: coffe.amount - 1
        }
      } else {
        return coffe
      }
    })
    setCoffes(newCoffeAmount)
  }

  function addCoffesToCart(id: string) {
    const newCoffeAmount = coffes.map((coffe) => {
      if (coffe.id === id) {
        return {
          ...coffe, isSelected: true
        }
      } else {
        return coffe
      }
    })
    setCoffes(newCoffeAmount)
  }

  function deleteSelectedCoffe(id: string){
    let newCoffeSelected = coffes.map(coffe => {
      if (coffe.id == id) {
          return {...coffe, isSelected: false}
      }else{
        return coffe
      }
    })
    setCoffes(newCoffeSelected)
  }

  // Update Amount Coffe Alread Selected
  useEffect(() => {
    let newCoffeSelected: any = []
    coffes.map(coffe => {
      if (coffe.isSelected == true) {
        newCoffeSelected.push(coffe)
      }
    })

    setCoffesSelected(newCoffeSelected)
    //Ajustar para ele não ser renderizado assim que o componente for montado e não iniciar com um array vazio
  }, [coffes])


  return (
    <CoffeContext.Provider
      value={{
        coffes,
        filteredCoffes,
        search,
        coffesSelected,
        moreAmountCoffe,
        lessAmountCoffe,
        addCoffesToCart,
        deleteSelectedCoffe,
        updateSearchValue
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}

