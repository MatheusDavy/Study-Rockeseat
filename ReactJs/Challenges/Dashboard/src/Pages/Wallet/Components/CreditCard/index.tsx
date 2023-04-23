import { CreditCardContainer, CreditCardHeader } from "./styles";

// Context
import { useCreditCardContext } from "../../../../Context/CreditCard";

// Icons
import { IoMdAddCircle } from 'react-icons/io'

// Components
import { CreditcardCard } from "../../../../Components/CreditCardCard";


export function CreditCards() {

    const { openCloseCloseModal, creditCard_API } = useCreditCardContext()

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
                    <div key={valuesCard.numberCard}>
                        <CreditcardCard
                        flag={valuesCard.flag}
                        limit={valuesCard.limit}
                        numberCard={valuesCard.numberCard}
                        expirationDate={valuesCard.expirationDate}
                        name={valuesCard.name}
                        roleRemove={true}
                    />
                    </div>
                ))}
          

        </CreditCardContainer>
    )
}