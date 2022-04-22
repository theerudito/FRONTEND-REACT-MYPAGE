import styled from "styled-components";
import { Dispositivos } from "../../Medias/Medidas";

export const ContenedorPrincipalPorfolio = styled.div`
  width: 100%;

  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  clear: both;
  overflow: hidden;

  @media ${Dispositivos.laptop} {
    width: 1200px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    margin: auto;
  }
`;

export const ContenedorTituloPorfolio = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }

  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }

  @media ${Dispositivos.mobileL} {
    max-width: 425px;
  }

  @media ${Dispositivos.tablet} {
    max-width: 768px;
  }

  @media ${Dispositivos.laptop} {
    max-width: 1024px;
  }

  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
  }

  @media ${Dispositivos.desktop} {
    max-width: 2560px;
  }
`;

export const ContenedorPrincipalCardPorfolio = styled(ContenedorTituloPorfolio)`
  background-color: #181a1b;
  border-radius: 5px;
  :hover {
    background-color: #181a2b;
  }
  @media ${Dispositivos.mobileS} {
    margin-top: 10px;
    width: 300px;
    height: 200px;
  }

  @media ${Dispositivos.mobileM} {
    margin-top: 10px;
    width: 360px;
    height: 200px;
  }

  @media ${Dispositivos.mobileL} {
    width: 380px;
    height: 200px;
  }
  @media ${Dispositivos.tablet} {
    margin-top: 10px;
    width: 500px;
    height: 250px;
  }
  @media ${Dispositivos.laptop} {
    width: 580px;
    height: 350px;
  }
`;

export const CardPorfolio = styled.div``;

export const ContenedorNombreImagenProfolio = styled.div`
  border-bottom: 1px solid;

  @media ${Dispositivos.mobileS} {
    width: 190px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 140px;
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
    margin-top: 20px;
  }

  @media ${Dispositivos.mobileM} {
    width: 250px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-left: 110px;
    margin-top: 10px;
  }

  @media ${Dispositivos.mobileL} {
    display: grid;
    width: 235px;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-left: 145px;
    margin-top: 25px;
  }

  @media ${Dispositivos.tablet} {
    display: grid;
    width: 335px;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-left: 165px;
    margin-top: 30px;
  }

  @media ${Dispositivos.laptop} {
    display: grid;
    width: 320px;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-left: 250px;
  }
`;

export const TituloPorfolio1 = styled.p`
  color: white;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const TituloPorfolio2 = styled(TituloPorfolio1)`
  @media ${Dispositivos.mobileS} {
    font-size: 14px;
    width: 160px;

    margin-left: 105px;
  }
  @media ${Dispositivos.mobileM} {
    font-size: 16px;
    width: 200px;
    margin-left: 10px;
  }
  @media ${Dispositivos.mobileL} {
    font-size: 14px;
  }
  @media ${Dispositivos.tablet} {
    font-size: 16px;
  }
  @media ${Dispositivos.laptop} {
    font-size: 16px;
  }
`;

export const ImgPorfolio = styled.img`
  object-fit: cover;
  border-radius: 5px;
  margin-left: 10px;

  @media ${Dispositivos.mobileS} {
    width: 100px;
    height: 185px;
  }

  @media ${Dispositivos.mobileM} {
    width: 100px;
    height: 185px;
  }

  @media ${Dispositivos.mobileL} {
    width: 140px;
    height: 185px;
    margin-left: 10px;
    margin-top: -1px;
  }
  @media ${Dispositivos.tablet} {
    width: 160px;
    height: 235px;
    margin-left: 5px;
  }
  @media ${Dispositivos.laptop} {
    width: 250px;
    height: 335px;
    margin-left: -25px;
    margin-top: -15px;
  }
`;

export const AplicacionesPorfolio = styled.div`
  @media ${Dispositivos.mobileS} {
    padding: 0px;
    width: 190px;
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    margin: 30px auto;
    gap: 5px;
  }
  @media ${Dispositivos.mobileM} {
    padding: 0px;
    width: 250px;
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    margin: 30px auto;
    gap: 5px;
  }

  @media ${Dispositivos.mobileL} {
    padding: 0px;
    width: 235px;
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    margin: 30px auto;
    gap: 5px;
  }

  @media ${Dispositivos.tablet} {
    padding: 0px;
    width: 335px;
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    margin: 30px auto;
    gap: 5px;
  }

  @media ${Dispositivos.laptop} {
    padding: 0px;
    width: 290px;
    display: grid;
    grid-template-columns: repeat(6, 3fr);
    margin: 30px auto;
    gap: 5px;

    align-items: center;
    justify-content: center;
  }
`;

export const ContendorTecnologias = styled.div``;

export const ImgGitPorfolio = styled.img`
  object-fit: cover;
  cursor: pointer;
  background-color: white;
  @media ${Dispositivos.mobileS} {
    width: 30px;
    height: 30px;
    margin-left: -25px;
    cursor: pointer;
    border-radius: 50%;
  }
  @media ${Dispositivos.mobileM} {
    width: 30px;
    height: 30px;
    margin-left: -10px;
    cursor: pointer;
    border-radius: 50%;
  }
  @media ${Dispositivos.mobileL} {
    background-color: red;
    width: 30px;
    height: 30px;
    margin-left: -20px;
    cursor: pointer;
    border-radius: 50%;
    background-color: orange;
  }

  @media ${Dispositivos.tablet} {
    width: 30px;
    height: 30px;
    margin-left: 70px;
    cursor: pointer;
    border-radius: 50%;
    background-color: blue;
  }

  @media ${Dispositivos.laptop} {
    width: 30px;
    height: 30px;
    margin-left: 60px;
    cursor: pointer;
    border-radius: 50%;
    background-color: green;
  }
`;

export const ButtonProfolio = styled.button`
  background-color: greenyellow;
  border: none;
  border-radius: 10px;
  :hover {
    background-color: orange;
  }

  @media ${Dispositivos.mobileS} {
    width: 150px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 80px;
  }

  @media ${Dispositivos.mobileM} {
    width: 140px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 60px;
  }

  @media ${Dispositivos.mobileL} {
    width: 140px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 80px;
  }
  @media ${Dispositivos.tablet} {
    width: 140px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 60px;
  }

  @media ${Dispositivos.laptop} {
    width: 160px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 60px;
  }
`;

export const ContendorBodyProfolio = styled(ContenedorTituloPorfolio)`
  grid-template-columns: repeat(2, 1fr);

  @media ${Dispositivos.mobileS} {
    width: 300px;
    height: 200px;
    margin-top: -65px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Dispositivos.mobileM} {
    width: 360px;
    height: 200px;
    margin-top: -55px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Dispositivos.mobileL} {
    width: 380px;
    height: 200px;
    margin-top: -70px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Dispositivos.tablet} {
    width: 500px;
    height: 250px;
    margin-top: -75px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Dispositivos.laptop} {
    width: 500px;
    height: 300px;
    margin-top: -50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TecnologiasProfolio = styled.img`
  object-fit: cover;
  cursor: pointer;
  @media ${Dispositivos.mobileS} {
    width: 20px;
    height: 20px;
    display: grid;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.mobileM} {
    width: 20px;
    height: 20px;
    display: grid;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.mobileL} {
    width: 20px;
    height: 20px;
    display: grid;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.tablet} {
    width: 25px;
    height: 25px;
    display: grid;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.laptop} {
    width: 30px;
    height: 30px;
    display: grid;
    margin: auto;
    align-items: center;
    justify-content: center;
  }
`;

export const LiksPorfolio = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  :hover {
    color: white;
  }
`;
