import { ReactNode, useReducer, useRef, useState } from "react";
import { TransactionContext } from "./context";
import { TransactionsProps, reducer } from "./reducer";
import { buildAction } from "./build_actions";

interface ChildrenProps {
    children: ReactNode
}


const initalValues: TransactionsProps = {
    income: 0,
    expense: 0,
    totalAmount: 0,
    transactionAPI: []
}

export function TransactionProvider({children}: ChildrenProps){

    const [isOpenModal, setIsOpenModal] = useState(false)

    const [transactions_API, dispatch] = useReducer(reducer, initalValues)
    const actions = useRef(buildAction(dispatch))
    const actionCurrent = actions.current

    function openCloseModal() {
        setIsOpenModal(!isOpenModal)
    }

    return(
        <TransactionContext.Provider
            value={{
                actionCurrent,
                transactions_API,
                isOpenModal,
                openCloseModal
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}