import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { fontTemplate } from "../../styles/templates/fonts";

/*
    SUMMARY
        1 - Interfaces
        2 - Containers
        3 - Grid 
        4 - Contents
*/

/*-----------------/ 1 - Interfaces /-----------------------*/
interface HomeContainerProps {
  children?: ReactNode;
}

interface CardsRevenuesProps {
  variant: "In" | "Out" | "Summary";
}

/*-----------------/ 2 - Containers /-----------------------*/

export const HomeContainer = styled.section<HomeContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 100%;

  padding-top: 30px;
`;
/*-----------------/   3 - Grid   /-----------------------*/
export const HomeGridOne = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;
export const HomeGridTwo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
export const HomeGridThree = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
/*-----------------/ 4 - Contents /-----------------------*/
export const CardsRevenues = styled.div<CardsRevenuesProps>`
  ${({ theme, variant }) => css`
    width: 100%;
    padding: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: linear-gradient(
        127.09deg,
        rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%,
        rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%
      )
      border-box;
    border-radius: 20px;

    .content--text {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .title {
        ${fontTemplate("1.2rem", "1", 300, theme.texts.title, "Arial")}
      }
      .amount {
        ${fontTemplate("2rem", "1", 700, theme.texts.title, "Arial")}
      }
    }

    .content--icon {
      background-color: ${(variant == "In" && theme.colorsStandard.green) ||
      (variant == "Out" && theme.colorsStandard.red) ||
      (variant == "Summary" && theme.colors.secundary)};
      color: ${theme.colorsStandard.white};

      width: 35px;
      height: 35px;
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
export const TransactionContent = styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding: 15px;
    max-height: 300px;
    min-height: 100%;
    height: 100%;
    background: linear-gradient(
        127.09deg,
        rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%,
        rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%
      )
      border-box;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
  `}
`;
export const GoalsContent = styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding: 15px;
    max-height: 300px;
    min-height: 100%;
    height: 100%;
    background: linear-gradient(
        127.09deg,
        rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%,
        rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%
      )
      border-box;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
  `}
`;
export const CreditCardContent = styled.div`
  ${({ theme }) => css`
    padding: 15px;
    max-height: 300px;
    min-height: 100%;
    height: 100%;
    background: linear-gradient(
        127.09deg,
        rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%,
        rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%
      )
      border-box;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
  `}
`;
