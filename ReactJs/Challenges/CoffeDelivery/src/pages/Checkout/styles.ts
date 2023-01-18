import { StripeLogo } from "phosphor-react";
import styled  from "styled-components";

export const ContainerCheckout = styled.div`
    display: grid;
    grid-template-columns: 1fr 448px;
    column-gap: 32px;

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
`


export const AsideContainer = styled.aside`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    background-color: ${props => props.theme['base-card']};
    padding: 40px;
    border-radius: 6px 44px;

`

export const NullCart = styled.p`
    color: ${props => props.theme['base-text']};
    font-weight: bold;
    text-align: center;
    font-size: 20px;

    display: flex;
    align-items: center;
    gap: 15px;
`