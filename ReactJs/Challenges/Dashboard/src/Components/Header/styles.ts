import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px 0px;

  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 5px 10px gray;

  .container {
    width: 90%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
  }
`;

// Toggle Menu
export const ButtonMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  pad: 1px;

  border: 0;
  background-color: transparent;

  color: ${(props) => props.theme.colors.secundary};

  cursor: pointer;

  svg {
    font-size: 40px;
  }
`;

// Navigations
export const NavigateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const ButtonNavigation = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  background-color: transparent;
  border: 0;

  cursor: pointer;

  color: ${(props) => props.theme.colors.secundary};

  width: fit-content;
  height: fit-content;
`;

export const NavbarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${(props) => props.theme.colors.secundary};

  width: fit-content;
  height: fit-content;

  position: relative;

  .amount {
    position: absolute;
    right: -9px;
    top: -9px;

    font-size: 10px;

    width: 18px;
    height: 18px;

    background-color: cyan;
    color: ${(props) => props.theme.colors.secundary};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
  }
`;

// Profile

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const ButtonProfile = styled.button`
  display: flex;
  align-items: center;
  padding:5px;
  transition: 0.4s;
  gap: 10px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  border-radius: 6px;
  &:hover{
    background-color: ${(props) => props.theme.buttons.hovers} ;
  }

  .profile__image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.secundary};
  }

  p{
    font-size: 16px;
    color: ${(props) => props.theme.colors.secundary};
  }

  svg{
    color: ${(props) => props.theme.colors.secundary};
    transition: 0.4s;
    &.active{
      transform: rotate(180deg);
    }
  }
`;

interface PopupProfileProps {
  isActive: boolean;
}

export const PopupProfile = styled.div<PopupProfileProps>`
  position: absolute;
  bottom: 0;
  transform: ${(props) =>
    props.isActive === true
      ? "translateY(calc(100% + 20px)) scale(1)"
      : "translateY(70%) scale(0.3)"};
  opacity: ${(props) => (props.isActive === true ? "1" : "0")};
  z-index: ${(props) => (props.isActive === true ? "1" : "-1")};
  background-color: ${(props) => props.theme.colors.primary};;
  box-shadow: 0px 5px 10px gray;

  transition: 0.4s;
  width: fit-content;
  height: auto;
  padding: 20px;
  border-radius: 8px;
 

  display: flex;
  flex-direction: column;
  gap: 15px;
`;
