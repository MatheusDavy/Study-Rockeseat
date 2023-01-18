import styled from 'styled-components'

// Container
export const ContainerCoffesSelected = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 15px;
    
`

// Image
export const ImageCoffeSelected = styled.img`
    width: auto;
    height: 64px;
    max-width: 64px;
    object-fit: contain;
`



export const InfoCoffeSelected = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    span{
        font-size: 16px;
        line-height: 1.3;
    }
`

// Buttons

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`

export const ButtonAmount = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 8px;
    border-radius: 6px;
    gap: 15px;
    background-color: ${props => props.theme['base-button']};

    button{
        border: 0;
        background-color: transparent;
        color: ${props => props.theme['purple']};
        font-weight: bold;
        font-size: 20px;
        
        width: 14px;
        height: 14px;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    span{
        font-size: 16px;
        line-height: 1.3;
    }
`

export const ButtonRemoveCoffe = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    padding: 8px;
    color: ${props => props.theme['purple']};
    background-color: ${props => props.theme['base-button']};
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    

    span{
        color: ${props => props.theme['base-text']};
        font-size: 12px;
        line-height: 12px;
        text-transform: uppercase;
        font-weight: bold;
    }
`


// Price

export const ContainerPrice = styled.div`
    font-size: 16px;
    font-weight: bold;
    line-height: 1.3;
    color: ${props => props.theme['base-text']};
` 