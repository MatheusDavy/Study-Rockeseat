import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useCallback, useContext } from "react";
import { UserDataContext } from "../../context/userDataForm";
import { SubtitleSuccessMessage, TitleSuccessMessage, ContainerSuccessMessage, ContainerMainContent, ContainerInfoText, BgIcon, InfoText } from "./styles";

export function SuccessMessage() {

    const { dataUser, totalPrice } = useContext(UserDataContext)

    return (

        <ContainerSuccessMessage>
            {dataUser != undefined ?
                <>
                    <TitleSuccessMessage>
                        Uhu! Pedido confirmado
                    </TitleSuccessMessage>

                    <SubtitleSuccessMessage>
                        Agora é só aguardar que logo o café chegará até você
                    </SubtitleSuccessMessage>

                    <ContainerMainContent>

                        <ContainerInfoText>
                            <BgIcon className="purple">
                                <MapPin size={24} />
                            </BgIcon>

                            <InfoText>
                                Entrega em <b>{dataUser.street}, {dataUser.number} {dataUser.neighboorhood}</b> - Porto Alegre, RS
                            </InfoText>

                        </ContainerInfoText>

                        <ContainerInfoText>
                            <BgIcon className="yellow">
                                <Timer size={24} />
                            </BgIcon>

                            <InfoText>
                                Previsão de entrega <br />
                                <b>20 min - 30 min</b>
                            </InfoText>
                        </ContainerInfoText>

                        <ContainerInfoText>
                            <BgIcon className="yellow-dark">
                                <CurrencyDollar size={24} />
                            </BgIcon>

                            <InfoText>
                                Pagamento na entrega <br />
                                <b>{dataUser.payment} - {totalPrice}</b>
                            </InfoText>
                        </ContainerInfoText>

                    </ContainerMainContent>
                </> 
                : 
                <h1>Error 404 - Paágina não encontrada</h1>
            }

        </ContainerSuccessMessage >

    )
}