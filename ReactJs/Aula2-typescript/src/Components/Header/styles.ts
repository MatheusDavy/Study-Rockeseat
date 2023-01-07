import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-itens: center;

    a {
      color: ;
      width: 3rem;
      height: 3rem;

      display: flex;
      align-itens: center;
      justify-content: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: 0.4s;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
      &.active {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
