import { createContext, ReactNode, useEffect, useState } from "react"

export interface ValueCardProps {
    id: string
    description: string
    date: string
    amount: string
    type: "income" | "expense"
}

interface ChildrenProviderProps {
    children: ReactNode
}

interface TransactionsContextProps {
    income: number
    expense: number
    totalAmount: number
    isOpenModal: boolean
    transactions_API?: ValueCardProps[]
    openCloseCloseModal: () => void
    updateTransactionsApi: (newValues: ValueCardProps) => void
    removeTransactions: (id: string) => void
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: ChildrenProviderProps) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [transactions_API, setCreditData_API] = useState<ValueCardProps[]>([])
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    function openCloseCloseModal() {
        setIsOpenModal(!isOpenModal)
    }

    function updateTransactionsApi(newValues: ValueCardProps) {
        let newValue = transactions_API
        newValue.push(newValues)
        setCreditData_API(newValue)

       // Call Update Income/Expense
       updateIncome()
       updateExpense()
    }

    function removeTransactions(id: string) {
        const newValue = transactions_API.filter(dataTransactions => {
            if (dataTransactions.id != id) {
                return dataTransactions
            }
        })

        setCreditData_API(newValue)

        updateIncome()
        updateExpense()
    }

    function updateIncome() {
        let newIncomeArray: Array<number> = []
        transactions_API.map(transaction => {
            let { amount, type } = transaction
            amount = amount.replace(/[^\d]/g, ''); //Remove all caracteres beyond numbers
            let newAmount = Number(amount.replace(/(\d{2})$/, '.$1')) //add '.' befores the two last numbers
            if (type == 'income') {
                newIncomeArray.push(newAmount)
            }
        })


        let numTotal: number = 0
        for (let i = 0; i < newIncomeArray.length; i++) {
            numTotal += newIncomeArray[i]
        }

        setIncome(numTotal)
    }

    function updateExpense() {
        let newExpenseArray: Array<number> = []
        transactions_API.map(transaction => {
            let { amount, type } = transaction
            amount = amount.replace(/[^\d]/g, ''); //Remove all caracteres beyond numbers
            let newAmount = Number(amount.replace(/(\d{2})$/, '.$1')) //add '.' befores the two last numbers
            if (type == 'expense') {
                newExpenseArray.push(newAmount)
            }
        })


        let numTotal: number = 0
        for (let i = 0; i < newExpenseArray.length; i++) {
            numTotal += newExpenseArray[i]
        }

        setExpense(numTotal)

    }

    function updateTotalAmount(){
        const newAmount: number = income - expense
        setTotalAmount(newAmount)
    }

    // Update Total Amount
    useEffect(()=>{
        updateTotalAmount()
    }, [income, expense])


    return (
        <TransactionsContext.Provider
            value={{
                income,
                expense,
                totalAmount,
                isOpenModal,
                transactions_API,
                openCloseCloseModal,
                updateTransactionsApi,
                removeTransactions
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}