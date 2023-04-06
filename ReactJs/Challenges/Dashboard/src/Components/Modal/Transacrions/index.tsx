// Commons
import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from "../../../Context/Transactions";
import gsap from 'gsap'
import nextId from "react-id-generator";

// Components
import { MessageError, MessageSuccess, ModalContainer, ModalHeader, ModalLayer, FormContainer, InputAmountContainer, InputDescriptionContainer, TypeTransactionContainer, SubmitButton } from "./styles";

// Icons
import { IoMdClose } from 'react-icons/io'
import { RiFileList3Line, RiErrorWarningFill } from 'react-icons/ri'
import { MdSwapVerticalCircle } from 'react-icons/md'
import { FaCheckCircle } from 'react-icons/fa'
import { TransactionContext } from "../../../Context/Transaction/context";

export function TransactionsModal() {

    const { isOpenModal, actionCurrent, openCloseModal } = useContext(TransactionContext)

    const [inputAmount, setInputAmount] = useState('')
    const [inputDescribe, setInputDescribe] = useState('')
    const [inputType, setInputType] = useState("")

    function callMessageError(txt: string) {
        const errorMessagText = document.getElementById('message-error-transactions-text') as HTMLInputElement
        errorMessagText.innerHTML = txt

        const errorMessageElement = document.getElementById('message-error-transactions') as HTMLInputElement
        gsap.to(errorMessageElement, {
            opacity: 1,
            duration: 1,
            onComplete: () => {
                gsap.to(errorMessageElement, {
                    opacity: 0,
                    duration: 1,
                    delay: 4,
                })
            }
        })
    }

    function callMessageSuccess() {
        // Call Success Message
        const successMessageElement = document.getElementById('message-success-transactions') as HTMLInputElement
        gsap.to(successMessageElement, {
            opacity: 1,
            duration: 1,
            onComplete: () => {
                gsap.to(successMessageElement, {
                    opacity: 0,
                    duration: 1,
                    delay: 4,
                })
            }
        })
    }

    function handleCloseModal() {
        openCloseModal()
    }

    function handlesetInputAmount(value: string) {
        value = value.replace(/[^\d]/g, '');
        let newValue
        if (value.length < 5) {
            const integerPart = value.slice(0, -2);
            const decimalPart = value.slice(-2);
            const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            const number = `${formattedIntegerPart},${decimalPart}`
            newValue = number.padStart(4, '0')

        } else if (value[0] == '0') {
            let arrayValue = value.split('')
            while (arrayValue[0] == '0') {
                arrayValue.shift();
            }
            const joinedArray = arrayValue.join('')
            const integerPart = joinedArray.slice(0, -2);
            const decimalPart = joinedArray.slice(-2);
            const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            newValue = `${formattedIntegerPart},${decimalPart}`

        } else {
            const integerPart = value.slice(0, -2);
            const decimalPart = value.slice(-2);
            const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            newValue = `${formattedIntegerPart},${decimalPart}`
        }

        setInputAmount(newValue)
    }

    function handleSetInputDescribe(value: string) {
        setInputDescribe(value)
    }

    function handleSetTypeTransactions(value: string) {
        setInputType(value)
    }

    function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        let error = false
        if ((!inputAmount || inputAmount[0] == '0') && !error) {
            error = true
            callMessageError('O valor não pode ser 0!')
            return 0
        }
        if (!inputDescribe && !error) {
            error = true
            callMessageError('Insira uma descrição!')
            return 0
        }
        if (!inputType && !error) {
            error = true
            callMessageError('Selecione o tipo de transação!')
            return 0
        }

        console.log('call form 1')

        // Send data
        if (!error) {
            const dateNow = new Date().toLocaleDateString()

            const dataInput = {
                id: nextId(),
                description: inputDescribe,
                date: dateNow,
                amount: inputAmount,
                type: inputType,
            }
            actionCurrent.newTransaction(dataInput)
            callMessageSuccess()
            event.target.reset()
            // Reset forms
            return 0
        }
    }

    return (
        <ModalLayer isOpen={isOpenModal}>

            <ModalContainer>
                <ModalHeader>
                    <h1 className="title">Credit Cards</h1>
                    <button className="btn--close-modal-transactions" onClick={handleCloseModal}>
                        <IoMdClose size={24} />
                    </button>
                </ModalHeader>

                <FormContainer onSubmit={(event) => handleSubmitForm(event)}>
                    <InputAmountContainer>
                        <MdSwapVerticalCircle size={24} />
                        <span className="currency--type">R$</span>
                        <input
                            placeholder="0,00"
                            value={inputAmount}
                            onChange={(event) => handlesetInputAmount(event.target.value)}
                        />



                    </InputAmountContainer>

                    <InputDescriptionContainer>
                        <RiFileList3Line size={24} />
                        <input
                            placeholder="DESCRIPTION"
                            value={inputDescribe}
                            onChange={(event) => handleSetInputDescribe(event.target.value)}
                        />



                    </InputDescriptionContainer>

                    <TypeTransactionContainer>
                        <button type="button" className={inputType == 'income' ? 'income' : ''} onClick={() => handleSetTypeTransactions('income')}>INCOME</button>
                        <button type="button" className={inputType == 'expense' ? 'expense' : ''} onClick={() => handleSetTypeTransactions('expense')}>EXPENSE</button>
                    </TypeTransactionContainer>

                    <SubmitButton type="submit">
                        SALVAR
                    </SubmitButton>
                </FormContainer>

            </ModalContainer>

            <MessageError id="message-error-transactions">
                <RiErrorWarningFill />
                <span id='message-error-transactions-text'>Nome inválido</span>
            </MessageError>

            <MessageSuccess id="message-success-transactions">
                <FaCheckCircle size={30} />
                Cartão cadastrado com sucesso
            </MessageSuccess>

        </ModalLayer>
    )
}