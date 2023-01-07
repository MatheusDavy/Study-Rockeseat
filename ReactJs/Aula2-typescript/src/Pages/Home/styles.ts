import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`
// Podemos usar um Component de Base para fazer as mesmas estilizações quando o MESMO COMPONENT (DIV, INPUT, SPAN) possuem as mesmas estilizações
export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono';
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

const buttonSubmit = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  berder-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  transition: 0.2s;
`

export const StartCountDownButton = styled(buttonSubmit)`
  background-color: ${(props) => props.theme['green-500']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const StopCountDownButton = styled(buttonSubmit)`
  background-color: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
