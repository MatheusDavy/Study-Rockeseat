import styled, { css } from "styled-components";
import { fontTemplate } from "../../../styles/templates/fonts";

export const MessageSuccess = styled.div`
  ${({theme})=> css`
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 25px;
      background-color: rgb(${theme.colors.primary});
      padding: 15px 20px;
      opacity: 0;

      position: absolute;
      left: 50%;
      top: 30px;
      transform: translateX(-50%);

      color: ${theme.colors.secundary};

      ${fontTemplate("2rem", "1", 700, theme.texts.title, "Arial")}

      border-radius: 8px;
  `}
  


`