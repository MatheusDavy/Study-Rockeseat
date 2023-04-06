import styled from "styled-components";

export const RevenueContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2);
  max-width: 100%;
  gap: 20px;
  box-shadow: 0px 5px 10px #dfdfdf;
  padding: 20px;
  border-radius: 18px;
`;

export const RevenueHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme.colors.secundary};
  }
`;

export const ButtonChangeGraphicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  button {
  }
`;

interface ButtonChangeGraphicsProps {
  expenseIsActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonChangeGraphics = styled.button<ButtonChangeGraphicsProps>`
  display: flex;
  align-items: center;
  gap: 15px;
  border: 0;
  background-color: transparent;
  pad: 10px;
  cursor: pointer;
  span {
    font-size: 0.75rem;
  }
  &::before {
    content: "";
    display: flex;
    position: relative;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.expenseIsActive ? "#33cc33" : props.theme.colors.secundary};
  }
`;


