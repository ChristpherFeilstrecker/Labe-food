
import styled from "styled-components";

export const ImgRestaurant = styled.img`
    width: 97%;
    height: 90%;
    margin-top: 1rem;
    border-radius: 20px 20px 0 0;
    object-fit: contain;
    backdrop-filter: blur(2px);
`

export const DetalhesRest = styled.div`
     color: #b8b8b8;
  p {
    margin: 0 0 0.5rem 0;
  }
`
export const InfoRest = styled.div`   
    width: 100%;
    display: flex;
    p:nth-child(1) {
    margin-right: 3rem;
  }
`

export const TextRest = styled.p`
  color: #E86E5A;
`

export const CategoriaCard = styled.div`     
  font-size: 18px;
  margin-top: 2.25rem;
  font-weight: 500;
  color: #000;
  font-family: 'Roboto', sans-serif;
  border-bottom: 1px solid #000;
  padding-bottom: 0.5rem;
  width: 97%
`

export const MainContainer = styled.div`
  margin-left: 2.4vw;
`

export const ProdutosContainer = styled.div`
  padding-bottom: 8vh;
`