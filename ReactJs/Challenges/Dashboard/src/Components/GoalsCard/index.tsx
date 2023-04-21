import { ContainerCard, ContentInfo, FooterCard, HeaderCard, IconBg, MiddleCard } from "./styles";

// Interfaces
import { GoalsProps } from "../../Context/Goals/interfaces";

// Icons
import { GiReceiveMoney } from 'react-icons/gi'
import { BiEditAlt } from 'react-icons/bi'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useGoalsContext } from "../../Context/Goals";
import { converteCurrencyToCurremtLanguage } from "../../Context/Utils/ConverteCurrency";
import { useTranslation } from "react-i18next";


export function GoalsCard({bgColor, percent, name, date, icon, id, amountFinal, amountInitial}: GoalsProps) {

    const {actionCurrent, openCloseEditModal} = useGoalsContext()

    const { i18n } = useTranslation()
    const currentLanguage = i18n.language
    
    function handleOpenEditModal(){
        openCloseEditModal(true, id)
    }

    function handleDeleteGoals(){
        const goalData = {
            id: id,
            bgColor: bgColor,
            percent: percent,
            name: name,
            icon: icon,
            amountFinal: amountFinal,
            amountInitial: amountInitial,
            date: date,
        }
        actionCurrent.deleteGoals(goalData)
    }

    const newPercent = percent.toFixed(2)
    const newAmountInital = converteCurrencyToCurremtLanguage(amountInitial, currentLanguage, false)
    const newAmountFinal = converteCurrencyToCurremtLanguage(amountFinal, currentLanguage, false)

    return (
        <ContainerCard key={id}>
            <HeaderCard>
                <IconBg bgColor={bgColor}>
                    {icon}
                </IconBg>
                <h3 className="title">{name}</h3>
            </HeaderCard>

            <MiddleCard percentConcluded={newPercent}>
                <ContentInfo className="content__info">
                    <div className="content--date">
                        <p className="description">Data final do objetivo</p>
                        <span className="date">{date}</span>
                    </div>

                    <span className="content--percentAmount">{newPercent}%</span>
                </ContentInfo>

                <div className='percent--bar'>
                    <div className="percent--fill"></div>
                </div>

                <p className="amount--compare">
                    R$ {newAmountInital} / {newAmountFinal}
                </p>
            </MiddleCard>

            <FooterCard>

                <button onClick={handleOpenEditModal}><MdEdit size={20} /></button>

                <button onClick={handleDeleteGoals}><MdDelete size={20} /></button>


            </FooterCard>

        </ContainerCard>
    )
}