import { MutableRefObject, createContext } from "react";
import { TransactionsProps } from "./reducer";


interface ContextProps {
    actionCurrent: any
    transactions_API: TransactionsProps
    openCloseModal: ()=> void
    isOpenModal: boolean
}

export const TransactionContext = createContext({} as ContextProps)