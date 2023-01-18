import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
`
// Banner
export const BannerContainer = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;

    padding: 94px 0px 108px 0px;
    
    margin: 0 auto;

    .banner_content{
        display: flex;
        flex-direction: column;
        
        max-width: 588px;
        width: 100%;
        
        h1{
            font-size: 48px;
            line-height: 1.3;
            font-weight: bold;
        }
        p{
            margin-top: 16px;

            font-size: 20px;
            line-height: 1.3;
        }
    }
`

export const BannerContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(294px, 2fr));
    row-gap: 20px;
    margin-top: 66px;

    .card-categories{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;

        font-size: 16px;


        
    }
`

export const BannerImage = styled.img`
    max-width: 476px;
    width: 100%;
    height: auto;

`


//Chose Coffes
export const MainContainer = styled.div`
padding: 32px 0px 109px 0px;
    display: flex;
    flex-direction: column;
    gap: 54px;
    h1{
        font-size: 32px;
        line-height: 1.3;
        font-weight: bold;
    }
`

export const CoffeContainer = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    row-gap: 40px;
`
