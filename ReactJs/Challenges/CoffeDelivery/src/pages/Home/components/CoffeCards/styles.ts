import styled from "styled-components"

export const CoffeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 24px 20px 24px;
    width: 256px;
    height: 100%;
    background-color: ${props => props.theme['background']};
    border-radius: 36px;

    h2{
        font-size: 20px;
        font-weight: bold;
        line-height: 1.3;

        text-align: center;

        margin-top: 16px;
    }   
    p{
        font-size: 14px;
        line-height: 1.3;

        margin-top: 8px;

        text-align: center;
    }
`

export const ImageCoffe = styled.img`
    width: 120px;
    height: 120px;
    object-fit: contain;

    margin-top: -20px;
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;

    margin-top: 12px;

    div{
        padding: 4px 8px;
        text-transform: uppercase;

        font-size: 10px;

        border-radius: 200px;
        background-color: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};
    }
`

//Buttons

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
    gap: 8px;
    margin-top: 33px;
`

export const PriceContainer = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    font-size: 24px;
    font-weight: bold;
    span{
        font-size: 14px;
        font-weight: lighter;
    }
`

export const AddRemoveContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px;
    border-radius: 9px;
    background-color: ${props => props.theme['base-button']};
    width: fit-content;
    justify-content: space-between;
    gap: 8px;
    
    min-width: 72px;

    justify-self: end;

    button{
        font-size: 14px;
        color: ${props => props.theme['purple-dark']};

        border: none;  
        background-color: transparent;
        cursor: pointer;
    }
`

export const AddToCart = styled.button`
    width: 38px;
    height: 38px;
    border-radius: 8px;
    background-color: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['white']};

    display: flex;
    justify-content: center;
    align-items: center;

    justify-self: end;

    cursor: pointer;
    border: 0;

`
