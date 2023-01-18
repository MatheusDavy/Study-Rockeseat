import styled from "styled-components";


export const ContainerTotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 100%;
`

export const ContainerInfoTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    width: 100%;
    color: ${props => props.theme['base-text']};
    p{
        font-size: 14px;
        line-height: 1.3;
        
    }

    span{
        font-size: 16px;
        line-height: 1.3;
        
    }
`

export const TotalPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    width: 100%;


    color: ${props => props.theme['base-subtitle']};
    font-weight: bold;
    p{
        font-size: 20px;
        line-height: 1.3;
        
    }

    span{
        font-size: 20px;
        line-height: 1.3;
        
    }
`

export const ButtonSendOrder = styled.button`
    width: 100%;
    padding: 12px;
    border-radius: 6px;

    background-color: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};

    text-align: center;
    font-size: 14px;
    line-height: 1.6;
    font-weight: bold;
    text-transform: uppercase;

    cursor: pointer;
    border: 0;
    transition: 0.4s;

    &:hover{
        transform: translateY(-2px);
        box-shadow: 0px 0px 20px rgba(127, 128, 128, 0.6);
    }

    &.disabled{
        background-color: gray;
        cursor: not-allowed;
    }
`