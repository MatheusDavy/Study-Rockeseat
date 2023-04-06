import { CreditCardContainer, CreditCardHeader } from "./styles";

// Icons
import { IoMdAddCircle } from 'react-icons/io'
import { useContext } from "react";
import { CreditCardContext } from "../../../../Context/CreditCard";
import { CreditcardCard } from "../../../../Components/CreditCardCard";

export function CreditCards() {

    const { openCloseCloseModal, creditCard_API } = useContext(CreditCardContext)

    function handleOpenModal() {
        openCloseCloseModal()
    }

    return (
        <CreditCardContainer>
            <CreditCardHeader>
                <h1 className="title">Credit Cards</h1>
                <button className="btn--add-cc" onClick={handleOpenModal}>
                    <IoMdAddCircle size={24} />
                </button>
            </CreditCardHeader>


            {creditCard_API?.map(valuesCard => (
                <CreditcardCard
                    flag={valuesCard.flag}
                    limit={valuesCard.limit}
                    numberCard={valuesCard.numberCard}
                    expirationDate={valuesCard.expirationDate}
                    name={valuesCard.name}
                    roleRemove={true}

                    key={valuesCard.numberCard}
                />
            ))}

        </CreditCardContainer>
    )
}