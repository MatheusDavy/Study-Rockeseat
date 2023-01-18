import styled from "styled-components";

export const ContainerSearchInput = styled.input`
    height: 40px;
    padding-left: 20px;
    width: 40%;
    border: 0;
    background-color: ${props => props.theme['base-input']};
    border-radius: 6px;
    color: ${props => props.theme['base-title']};
    box-sizing: border-box;

    &:focus{
        border: 1px solid ${props => props.theme['purple']};
    }
`