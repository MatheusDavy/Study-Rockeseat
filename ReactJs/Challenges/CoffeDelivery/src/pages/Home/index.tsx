import { HomeContainer ,BannerContainer, BannerContainerCards, BannerImage, MainContainer, CoffeContainer } from "./style"
import bannerImage from '../../assets/banner.svg'
import { CoffeCards } from "./components/CoffeCards"
import { useContext } from "react"
import { CoffeContext } from "../../context/dataCoffes"

export function Home (){

    const {coffes, filteredCoffes} = useContext(CoffeContext)

    return(
        <HomeContainer>
            <BannerContainer>
            <div className="banner_content">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora </p>

                <BannerContainerCards className="banner_content-categories">
                    <div className="card-categories">
                        <img src='' alt="" />
                        Compra simples e segura
                    </div>

                    <div className="card-categories">
                        <img src="" alt="" />
                        Embalagem mantém o café intacto
                    </div>

                    <div className="card-categories">
                        <img src="" alt="" />
                        Entrega rápida e rastreada
                    </div>

                    <div className="card-categories">
                        <img src="" alt="" />
                        O café chega fresquinho até você
                    </div>
                </BannerContainerCards>
            </div>
            <BannerImage src={bannerImage} alt="" className="banner_image"/>
            </BannerContainer>

            <MainContainer>
                <h1>Nossos cafés</h1>

                <CoffeContainer>
                        {filteredCoffes.map(coffe => {
                            return(
                                <CoffeCards id={coffe.id}
                                image={coffe.image}
                                name={coffe.name}
                                description={coffe.description}
                                price={coffe.price}
                                amount={coffe.amount}
                                informations={coffe.informations}
                                isSelected={false}                                />
                            )
                        })}
                </CoffeContainer>
            </MainContainer>
        </HomeContainer>         
    )
}