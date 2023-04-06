import * as actionTypes from './action_types'
import { TransactionProps } from './reducer'


export const buildAction = (dispatch) => {

    return { 
        newTransaction: (transaction: TransactionProps) => dispatch({ type: actionTypes.ADD_TRANSACTION, value: transaction }),
        deleteTransaction: (transaction: TransactionProps) => dispatch({ type: actionTypes.DELETE_TRANSACTION, value: transaction })
    }

}