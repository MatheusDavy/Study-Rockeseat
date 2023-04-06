// Components
import { TransactionsContainer, TransactionsHeader } from "./style";
import { TransactionsTable } from "../../../../Components/TransactionsTable";
// icons
import { IoMdAddCircle } from 'react-icons/io'
import { useContext } from "react";
import { TransactionsContext } from "../../../../Context/Transactions";
import { TransactionsModal } from "../../../../Components/Modal/Transacrions";
import { TransactionContext } from "../../../../Context/Transaction/context";

export function Transactions() {

  const { openCloseModal, transactions_API } = useContext(TransactionContext)

  function handleOpenModal() {
    openCloseModal()
  }

  return (
    <>
      <TransactionsContainer>
        <TransactionsHeader>
          <h1 className="title">Transactions</h1>
          <button className="btn--add-transations" onClick={handleOpenModal}>
            <IoMdAddCircle size={24} />
          </button>
        </TransactionsHeader>

        {transactions_API.transactionAPI?.map(transaction => (
          <TransactionsTable
            key={transaction.id}
            id={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            description={transaction.description}
            date={transaction.date}
          />
        ))}



      </TransactionsContainer>

      <TransactionsModal />
    </>
  );
}
