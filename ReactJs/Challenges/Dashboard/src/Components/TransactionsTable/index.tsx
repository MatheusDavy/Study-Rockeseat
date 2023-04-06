import { useContext } from "react";
import { TransactionsDescription, TransactionsContainer, TransactionsAmount } from "./styles";

// Icons
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { TransactionsContext } from "../../Context/Transactions";
import { TransactionContext } from "../../Context/Transaction/context";

interface TransactionsTableProps {
    type: "income" | "expense"
    amount: number
    description: string
    date: string
    id: string
}

export function TransactionsTable({ type, amount, description, date, id }: TransactionsTableProps) {
    const {transactions_API, actionCurrent} = useContext(TransactionContext);

    function handleRemoveTransaction(){
        const cardProps = {
            id: id,
            date: date,
            amount: amount,
            type: type,
            description: description
        }
        actionCurrent.deleteTransaction({value: cardProps})
    }

    return (
        <TransactionsContainer>

            <TransactionsDescription type={type}>
                {type == "income" && <BsArrowUpCircle size={23} />}

                {type == "expense" && <BsArrowDownCircle size={23} />}

                <div className="content__text">
                    <h3 className="content__text--title">{description}</h3>
                    <h4 className="content__text--date">{date}</h4>
                </div>
            </TransactionsDescription>



            <TransactionsAmount type={type}>
                {type == "income" && (amount)}

                {type == "expense" && (`- ${amount}`)}
            </TransactionsAmount>

            <button onClick={handleRemoveTransaction}>
                <MdDelete size={24} />
            </button>
        </TransactionsContainer>
    )
}