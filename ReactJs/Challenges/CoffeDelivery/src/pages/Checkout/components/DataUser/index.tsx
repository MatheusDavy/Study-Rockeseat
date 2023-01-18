import { Car, MapPin, Money } from 'phosphor-react'
import { DataUserContainer, TextDescribeLocale, FormContainer, InputDataUser, FormDataUser, InputContainer, ContainerPaymentBtn, ButtonPayment } from './style'
import { useContext, useEffect, useState } from 'react';
import { useFormContext, useForm } from 'react-hook-form'
import { UserDataContext } from '../../../../context/userDataForm';
import { CoffeContext } from '../../../../context/dataCoffes';
import { useNavigate } from "react-router-dom"

export interface CoffeProps {
    id: string;
    image: string
    informations: string[]
    name: string;
    description: string;
    price: string;
    amount: number;
    isSelected: true | false;
}

interface UserDataProps {
    street: string
    neighboorhood: string
    complement: string
    cep: string
    number: number
    coffes: CoffeProps
}

export function DataUser() {
    const navigate = useNavigate();

    //Context
    const { updateDataUser } = useContext(UserDataContext)
    const { coffesSelected } = useContext(CoffeContext)

    //States
    const [payment, setPayment] = useState('')
    const { register, handleSubmit} = useForm<UserDataProps>();

    // Functions
    function handleSelectPayment(element: any) {
        const buttonClicked = element.target
        buttonClicked.classList.add("active")
        setPayment(buttonClicked.dataset.payment)

        // Add only one methody payment ACTIVE class
        const btnsPayment = document.querySelectorAll(".btn__payment")
        btnsPayment.forEach(button => {
            if (button != element.target) {
                button.classList.remove('active')
            }
        })
    }
    function sendDataForm(data: UserDataProps) {
        if (payment != '') {
            const newCompleteDataUser = { ...data, payment, coffesSelected }
            updateDataUser(newCompleteDataUser)
            navigate("/success-message")
        } else {
            alert('Informe o método de pagamento')
        }
    }

    return (
        <DataUserContainer>
            <FormContainer>
                <TextDescribeLocale>
                    <MapPin size={24} />
                    <p>
                        Endereço de Entrega
                        <span>Informe o endereço onde deseja receber seu pedido</span>
                    </p>
                </TextDescribeLocale>

                <FormDataUser onSubmit={handleSubmit(sendDataForm)} className='form-data-use' id='form-data-use'>
                    <InputDataUser type="text" placeholder='Rua' {...register('street')} required />
                    <InputDataUser type="text" placeholder='Bairro' {...register('neighboorhood')} required />
                    <InputDataUser type="text" placeholder='Complemento' {...register('complement')} required />

                    <InputContainer>
                        <InputDataUser type="number" placeholder='CEP' {...register('cep')} required />
                        <InputDataUser type="number" placeholder='Número' {...register('number')} required />
                    </InputContainer>

                </FormDataUser>

            </FormContainer>

            <FormContainer>
                <TextDescribeLocale>
                    <Money size={32} />
                    <p>
                        Pagamento
                        <br />
                        O pagamento é feito na entrega. Escolha a forma que deseja pagar
                    </p>
                </TextDescribeLocale>

                <ContainerPaymentBtn>

                    <ButtonPayment onClick={handleSelectPayment} data-payment='Cartão de crédito' className='btn__payment'>
                        Cartão de crédito
                    </ButtonPayment>

                    <ButtonPayment onClick={handleSelectPayment} data-payment='Cartão de débito' className='btn__payment'>
                        Cartão de débito
                    </ButtonPayment>

                    <ButtonPayment onClick={handleSelectPayment} data-payment='Dinheiro' className='btn__payment'>
                        Dinheiro
                    </ButtonPayment>

                </ContainerPaymentBtn>

            </FormContainer>
        </DataUserContainer>
    )
}