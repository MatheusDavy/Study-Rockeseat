import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AmounContainer, EaningsCardContainer, IconButton } from "./styles";

interface EarningCardsProps {
    icon: any
    amount: string
    percent: string
    iconColor: string
    pcColor: string
    iconBg: string
}

import { converteCurrencyToCurremtLanguage } from "../../../../Context/ConverteCurrency";

export function EaningsCards({icon, amount, percent, iconColor, pcColor, iconBg}: EarningCardsProps){

    const {i18n} = useTranslation()
    const currentLanguage = i18n.language

    const amountConverte = converteCurrencyToCurremtLanguage(amount, currentLanguage)
    
    

    // Check if Number Percent is negative or positive
    const isPositivePercemt = percent.includes('+')

    return(
        <EaningsCardContainer>
            <IconButton iconColor={iconColor} iconBg={iconBg}>
                {icon}
            </IconButton>
            <AmounContainer isPositivePercent={isPositivePercemt}>
                {amountConverte}  <strong>{percent}</strong>
            </AmounContainer>
        </EaningsCardContainer>
    )
}