// Data
import { useContext, useState, useEffect } from 'react'
// Icons
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs'
import { FaMoneyBill } from 'react-icons/fa'
// Components
import { CardsRevenues, HomeContainer, HomeContainerCards, HomeGridOne } from './styles'
import { converteCurrencyToCurremtLanguage } from '../../Context/Utils/ConverteCurrency'
import { useTranslation } from 'react-i18next'
import { TransactionContext } from '../../Context/Transaction/context'


export function Home() {
    const {transactions_API}  = useContext(TransactionContext)

    const { i18n } = useTranslation()
    const currentLanguage = i18n.language

    const newIncome = converteCurrencyToCurremtLanguage(transactions_API.income, currentLanguage, true)
    const newExpense = converteCurrencyToCurremtLanguage(transactions_API.expense, currentLanguage, true)
    const newTotal = (converteCurrencyToCurremtLanguage(transactions_API.totalAmount, currentLanguage, true))
    
    return (
        <HomeContainer>
            <HomeGridOne>

                <CardsRevenues variant='In'>
                    <div className='content--text'>
                        <h3 className='title'>January</h3>
                        <h2 className='amount'>{newIncome}</h2>
                    </div>

                    <div className='content--icon'>
                        <BsFillArrowUpCircleFill size={23} />
                    </div>
                </CardsRevenues>

                <CardsRevenues variant='Out'>
                    <div className='content--text'>
                        <h3 className='title'>January</h3>
                        <h2 className='amount'>{newExpense}</h2>
                    </div>

                    <div className='content--icon'>
                        <BsFillArrowDownCircleFill size={23} />
                    </div>
                </CardsRevenues>

                <CardsRevenues variant='Summary'>
                    <div className='content--text'>
                        <h3 className='title'>January</h3>
                        <h2 className='amount'>{newTotal}</h2>
                    </div>

                    <div className='content--icon'>
                        <FaMoneyBill size={23} />
                    </div>
                </CardsRevenues>

            </HomeGridOne>


        </HomeContainer>
    )
}