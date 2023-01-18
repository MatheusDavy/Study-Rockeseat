import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1120px;
    
    margin: 0 auto;

    padding: 32px 0px;

    .logo{
        width: 85px;
        height: auto;
        max-height: 40px;
        object-fit: contain;
    }

    .informations{
        display: flex;
        flex-direction: row;
        gap: 12px;

        .locale{
            background-color: ${props => props.theme['purple-light']};
            color: ${props => props.theme['purple-dark']};

            padding: 8px;
            border-radius: 8px;
            
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 4px;

            font-size: 14px;
        }
        a{
            position: relative;

            width: 38px;
            height: 38px;
            background-color: ${props => props.theme['yellow-light']};

            color: ${props => props.theme['yellow-dark']};
            border-radius: 8px;

            display: flex;
            align-items: center;
            justify-content: center;

            .markTotalItens{
                position: absolute;
                right: -0;
                top: 0;
                transform: translate(50%, -50%);

                background-color: ${props => props.theme['yellow-dark']};

                color: ${props => props.theme['white']};
                font-size: 16px;
                font-weight: bold;

                width: 25px;
                height: 25px;

                border-radius: 50%;

                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`
