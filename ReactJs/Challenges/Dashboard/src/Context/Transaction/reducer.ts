import * as actionTypes from './action_types'

export interface TransactionsProps {
    income: number
    expense: number
    totalAmount: number
    transactionAPI: TransactionProps[]
}

export interface TransactionProps {
    id: string
    description: string
    date: string
    amount: string
    type: "income" | "expense"
}

interface DispatchProps {
    type: string;
    value: TransactionProps
}

export const reducer = (state: TransactionsProps, action: DispatchProps) => {
    switch (action.type) {
        case actionTypes.ADD_TRANSACTION: {
            return newTransaction(state, action)
        };
        case actionTypes.DELETE_TRANSACTION: {
            return deleteTransaction(state, action)
        }
    }
}

const deleteTransaction = (state: TransactionsProps, action: DispatchProps) => {
    const newArrayValues = state.transactionAPI.filter(transaction => {
        if (transaction.id != action.value.id) {
            return transaction
        }
    })

    const newIncome = updateIncome(newArrayValues)
    const newExpense = updateExpense(newArrayValues)
    const newAmount = updateAmount(newIncome, newExpense)

    return {
        income: newIncome,
        expense: newExpense,
        totalAmount: newAmount,
        transactionAPI: newArrayValues
    }
}

const newTransaction = (state: TransactionsProps, action: DispatchProps) => {
    let newArrayValues: TransactionProps[] = state.transactionAPI
    newArrayValues.push(action.value)

    const newIncome = updateIncome(newArrayValues)
    const newExpense = updateExpense(newArrayValues)
    const newAmount = updateAmount(newIncome, newExpense)

    return {
        income: newIncome,
        expense: newExpense,
        totalAmount: newAmount,
        transactionAPI: newArrayValues
    }
}

const updateIncome = (newValue: TransactionProps[],) => {
    let newIncome = 0
    newValue.map(transaction => {
        let { amount, type } = transaction
        amount = amount.replace(/[^\d]/g, ''); //Remove all caracteres beyond numbers
        let newAmount = Number(amount.replace(/(\d{2})$/, '.$1')) //add '.' befores the two last numbers
        if (type == 'income') {
            newIncome += newAmount
        }
    })

    return newIncome
}

const updateExpense = (newValue: TransactionProps[],) => {
    let newIncome = 0
    newValue.map(transaction => {
        let { amount, type } = transaction
        amount = amount.replace(/[^\d]/g, ''); //Remove all caracteres beyond numbers
        let newAmount = Number(amount.replace(/(\d{2})$/, '.$1')) //add '.' befores the two last numbers
        if (type == 'expense') {
            newIncome += newAmount
        }
    })

    return newIncome
}

const updateAmount = (income: number, expense: number) => {
    const newAmount: number = income - expense
    return newAmount
}