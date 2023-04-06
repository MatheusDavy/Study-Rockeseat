import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { fontTemplate } from "../../styles/templates/fonts";

/*-----------------/ Container /-----------------------*/
interface HomeContainerProps {
    children?: ReactNode
}

export const HomeContainer = styled.section<HomeContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    width: 100%;

    padding-top: 30px;
`
/*-----------------/ Grid One /-----------------------*/
export const HomeGridOne = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
`
interface CardsRevenuesProps {
    variant: "In" | 'Out' | 'Summary'
}
export const CardsRevenues = styled.div<CardsRevenuesProps>`
    ${({ theme, variant }) => css`
        width: 100%;
        padding: 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background: linear-gradient(127.09deg, rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%, rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%) border-box;
        border-radius: 20px;

        .content--text{
                display: flex;
                flex-direction: column;
                gap: 5px;
                
                .title{
                    ${fontTemplate('1.2rem', '1', 300, theme.texts.title, 'Arial')}
                }
                .amount{
                    ${fontTemplate('2rem', '1', 700, theme.texts.title, 'Arial')}
                }        
        }

        .content--icon{
            background-color: ${
                variant == 'In' && theme.colorsStandard.green ||
                variant == 'Out' && theme.colorsStandard.red ||
                variant == 'Summary' && theme.colors.secundary
            };
            color: ${theme.colorsStandard.white};

            width: 35px;
            height: 35px;
            border-radius: 8px;
            
            display: flex;
            align-items: center;
            justify-content: center;

        }
    `}
`
/*-----------------/ Grid Two /-----------------------*/

export const HomeContainerCards = styled.div`
    display: flex;
    width: 100%;
    flex-direction: grid;
    grid-template-columns: repeat(auto-fill, minmax(145px 1fr));
    justify-content: center;
    align-items: center;
    gap: 30px;
`