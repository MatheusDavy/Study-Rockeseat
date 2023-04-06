import { ContainerHover, CreditCardContainer, CreditCardFooter, CreditCardHeader } from "./styles";

// Imagem
import visaFlag from '../../Assets/Images/CreditCard/flag-visa.png'
import eloFlag from '../../Assets/Images/CreditCard/flag-elo.png'
import expressFlag from '../../Assets/Images/CreditCard/flag-american-express.png'
import mastercardFlag from '../../Assets/Images/CreditCard/flag-mastercard.png'

// Icons
import {MdDelete} from 'react-icons/md'
import { useContext } from "react";
import { CreditCardContext } from "../../Context/CreditCard";

interface CreditcardCardProps {
    flag: string | null
    limit: number
    numberCard: string
    expirationDate: string
    name: string
    roleRemove?: boolean
}


export function CreditcardCard({flag, limit, numberCard, expirationDate, name, roleRemove = false}: CreditcardCardProps) {

    const {removeCreditCard} = useContext(CreditCardContext)

    function handleRemoveCard(){
        removeCreditCard(numberCard)
    }

    return (
        <CreditCardContainer typeCardCredit={flag}>
            <CreditCardHeader>
                <div className="amount-container">
                    <span className="limit">Limit</span>
                    <span className="amount">{limit}</span>
                </div>

                {flag === 'visa' && <img src={visaFlag} alt="" className="flag" />}
                {flag === 'elo' && <img src={eloFlag} alt="" className="flag" />}
                {flag === 'express' && <img src={expressFlag} alt="" className="flag" />}
                {flag === 'mastercard' && <img src={mastercardFlag} alt="" className="flag" />}
                {flag === '' && ''}

            </CreditCardHeader>

            <h3 className="name--card">{name}</h3>

            <CreditCardFooter>
                <span className="number--card">{numberCard}</span>
                <span className="expiration--date">{expirationDate}</span>
            </CreditCardFooter>

            {roleRemove && (
                <ContainerHover id='hover--data'>

                    <button onClick={handleRemoveCard}>
                        <MdDelete size={24}/>
                    </button>

                    <ul>
                        <li>{name}</li>
                        <li>{limit}</li>
                        <li>{numberCard}</li>
                        <li>{expirationDate}</li>
                    </ul>

                </ContainerHover>
            )}

        </CreditCardContainer>
    )
}