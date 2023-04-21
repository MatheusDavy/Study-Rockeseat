import styled, { css } from "styled-components";
import { fontTemplate } from "../../../styles/templates/fonts";

export const MessageError = styled.div`
  ${({theme})=> css`
      display: flex;
      align-items: center;

      gap: 15px;
      background-color: rgb(${theme.colors.primary});
      padding: 15px 20px;

      position: absolute;
      right: 20px;
      bottom: 20px;
      opacity: 0;

      color: ${theme.colors.secundary};

      ${fontTemplate("1.4rem", "1", 700, theme.texts.title, "Arial")}

      border-radius: 8px;
  `}
`