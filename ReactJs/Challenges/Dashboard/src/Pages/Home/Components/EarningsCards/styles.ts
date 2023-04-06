import styled from "styled-components";

interface EaningsCardContainerProps {
    
}

export const EaningsCardContainer = styled.div<EaningsCardContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: start;
    padding:15px;
    border-radius: 18px;
    box-shadow: 0px 5px 10px #dfdfdf;
    width: fit-content;
`

interface IconButtonProps {
    iconBg: string
    iconColor: string
}

export const IconButton = styled.button<IconButtonProps>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    background-color: ${props => props.iconBg};
    color: ${props => props.iconColor};    
    cursor: pointer;
    transition: 0.4s;

    &:hover{
        box-shadow: 0px 5px 10px #dfdfdf;
    }
`

interface AmounContainerProps {
    isPositivePercent: boolean
}

export const AmounContainer = styled.p<AmounContainerProps>`
    font-size: 1rem;
    line-height: 1.3;
    color: ${props => props.theme.colors.secundary};
    display:flex ;
    gap: 30px;

    strong{
        color: ${props => props.isPositivePercent ? '#33cc33' : '#cc0000'}; 
    }
`
