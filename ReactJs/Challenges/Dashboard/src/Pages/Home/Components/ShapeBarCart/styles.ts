import styled, { css } from "styled-components";

interface Props{
    active: boolean
}

export const Container = styled.div<Props>`
${({ theme, active }) => css`
        width: auto;
        height: auto;
        padding: 15px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: linear-gradient(127.09deg, rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%, rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%) border-box;
        border-radius: 20px;

        display: ${active ? 'block' : 'none'};
    `}

`

