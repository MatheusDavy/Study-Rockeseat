import styled from "styled-components";

export const DataUserContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;

`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 30px;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;
`

export const TextDescribeLocale = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 5px;
    color: ${props => props.theme['purple']};

    p{
        font-size: 16px;
        line-height: 1.3;
        color: ${props => props.theme['base-subtitle']};

        display: flex;
        flex-direction: column;

        span{
            font-size: 14px;
            line-height: 1.3;
        }
    }
`
export const FormDataUser =  styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 14px;
`

export const InputDataUser = styled.input`
    width: 100%;
    height: auto;

    padding: 12px;
    border-radius: 6px;
    background-color: ${props => props.theme['base-input']};
    
    color: ${props => props.theme['base-label']};
    font-size: 14px;
    line-height: 1.3;

    border: 0;
`

export const ContainerPaymentBtn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const ButtonPayment = styled.button`
    width: 179px;
    height: 51px;
    border-radius: 6px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    align-items: center;

    background-color: ${props => props.theme['base-input']};

    text-transform: uppercase;
    color: #574F4D;
    font-size: 14px;
    line-height: 1.3;

    cursor: pointer;
    border: 0;

    transition: 0.4s;

    &.active{
        background-color: ${props => props.theme['purple']};
        color: ${props => props.theme['white']};
        font-weight: bold;
    }
`