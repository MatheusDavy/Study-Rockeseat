import styled from "styled-components";

export const ContainerSuccessMessage = styled.section`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;

  padding: 84px 0px;
`;

export const TitleSuccessMessage = styled.h1`
  font-size: 32px;
  line-height: 1.3;
  font-weight: bold;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const SubtitleSuccessMessage = styled.h1`
  font-size: 20px;
  line-height: 1.3;
  font-weight: 400;
  
`;

export const ContainerMainContent = styled.div`
  width: 100%;
  max-width: 526px;

  padding: 40px;
  margin-top: 40px;

  background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #DBAC2C, #8047F8) border-box;
  border-radius: 6px 36px;
  border: 4px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 32px;color: ${(props) => props.theme["base-subtitle"]};
`;


export const ContainerInfoText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`


export const BgIcon = styled.div`
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    color: ${props => props.theme['white']};

    &.purple{
        background-color: ${props => props.theme['purple']};
    }
    
    &.yellow{
        background-color: ${props => props.theme['yellow']};
    }
    
    &.yellow-dark{
        background-color: ${props => props.theme['yellow-dark']};
    }
`

export const InfoText = styled.p`
    font-size: 16px;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};

    width: 85%;

    b{
        font-weight: bold;
    }
`