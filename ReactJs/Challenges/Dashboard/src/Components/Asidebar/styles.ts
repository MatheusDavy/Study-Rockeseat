import { ReactNode } from "react";
import styled from "styled-components";

interface AsidebarContainerProps {
  isActive: boolean;
}

export const AsidebarContainer = styled.aside<AsidebarContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 80px;

  position: fixed;
  inset: 0;

  width: 30vw;
  height: 100vh;
  padding-top: 30px;
  padding-left: 30px;

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 0px 10px gray;
  transition: 0.4s;

  transform: ${(props) =>
    props.isActive === true ? "translateX(0px)" : "translateX(-120%)"};
`;
// Close Asidebar
export const CloseAsidebar = styled.button`
  position: absolute;
  right: 25px;
  top: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  padding: 3px;
  border: 0;
  background-color: transparent;

  cursor: pointer;

  svg {
    transition: 0.4s;
    fill: ${(props) => props.theme.colors.secundary};
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.colors.hovers};
    }
  }
`;

// Logo Container
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

// Links Container
export const LinksContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;

  overflow-y: auto;

  padding-bottom: 30px;

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  & {
    scrollbar-width: auto;
    scrollbar-color: ${(props) => props.theme.colors.secundary} #ffffff;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secundary};
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`;
export const LinksNav = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.25rem;
    text-transform: uppercase;
    font-weight: 300;
    margin: 0;
    color: ${(props) => props.theme.texts.title};
  }
`;
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;

  li {
    a {
      padding: 18px 0px;
      display: flex;
      align-items: center;
      gap: 15px;

      text-decoration: none;

      width: fit-content;

      font-size: 1.25rem;
      color: ${(props) => props.theme.texts.paragraph};

      transition: 0.4s;

      font-weight: 500;

      position: relative;

      &:hover {
        color: ${(props) => props.theme.texts.hovers};
      }

      &.active {
        color: ${(props) => props.theme.texts.hovers};

        &::after {
          content: "";
          position: absolute;
          left: -25px;
          top: 50%;
          transform: translateY(-50%);

          width: 0;
          height: 0;
          
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          border-left: 7px solid ${(props) => props.theme.texts.hovers};
        }
      }
    }
  }
`;
