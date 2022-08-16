import styled from "styled-components";
import { Dispositivos } from "../../Medias/Medidas";

export const ContenedorPrincipalPorfolio = styled.div`
  @media ${Dispositivos.mobileS} {
    background-color: red;
  }
  @media ${Dispositivos.mobileM} {
    background-color: violet;
  }
  @media ${Dispositivos.mobileL} {
    background-color: green;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 400px;
    margin: auto;
    align-items: center;
    justify-content: center;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${Dispositivos.tablet} {
    background-color: purple;
  }
  @media ${Dispositivos.laptop} {
    background-color: gray;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 800px;
    margin: auto;
    align-items: center;
    justify-content: center;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${Dispositivos.laptopL} {
    background-color: blue;
  }
  @media ${Dispositivos.desktop} {
    background-color: orange;
  }
`;

export const ContenedorCardPortafolio = styled.div`
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    background-color: red;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    background-color: violet;
  }
  @media ${Dispositivos.mobileL} {
    max-width: 425px;
    background-color: green;
    background-color: #181a2b;
    border-radius: 5px;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 400px;
    height: 250px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${Dispositivos.tablet} {
    max-width: 768px;
    background-color: purple;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;

    background-color: #181a2b;
    border-radius: 5px;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 590px;
    height: 350px;
    grid-template-columns: repeat(2, 4fr);
  }
  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
    background-color: blue;
  }
  @media ${Dispositivos.desktop} {
    max-width: 2560px;
    background-color: orange;
  }
`;

export const ContenedorTituloPorfolio = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const ContenedorPrincipalCardPorfolio = styled.div``;

export const ContenedorImagenPortafolio = styled.div``;

export const ImagenPortafolio = styled.img`
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    background-color: red;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    background-color: violet;
  }
  @media ${Dispositivos.mobileL} {
    max-width: 425px;
    background-color: green;
    width: 180px;
    height: 337px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media ${Dispositivos.tablet} {
    max-width: 768px;
    background-color: purple;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    background-color: gray;
    width: 248px;
    height: 337px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
    background-color: blue;
  }
  @media ${Dispositivos.desktop} {
    max-width: 2560px;
    background-color: orange;
  }
`;

export const ContenedorBodyPortafolio = styled.div`
  height: 300px;
  width: 319px;
  margin-top: 25px;

  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    background-color: red;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    background-color: violet;
  }
  @media ${Dispositivos.mobileL} {
    background-color: green;
    height: 100px;
    width: 200px;
    margin-top: 25px;
  }
  @media ${Dispositivos.tablet} {
    max-width: 768px;
    background-color: purple;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    background-color: gray;
    height: 300px;
    width: 319px;
    margin-top: 25px;
  }
  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
    background-color: blue;
  }
  @media ${Dispositivos.desktop} {
    max-width: 2560px;
    background-color: orange;
  }
`;

export const ContenedorTitleYGitHub = styled.div`
  display: grid;
  margin-left: -15px;
  border-bottom: 1px solid white;
`;

export const TitlePortafolio = styled.p`
  color: white;
  margin-top: 10px;
  margin-left: 10px;
  width: 280px;
`;

export const ImageGitGub = styled.img`
  width: 40px;
  margin-left: auto;
  margin-right: 5px;
  margin-top: -20px;
  cursor: pointer;
`;

export const ContenedorInfoPortafolio = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  margin-top: 30px;
`;

export const TitleBodyPortafolio = styled.p`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 10px;
  font-size: 18px;
`;

export const ButtonBodyPortafolio = styled.button`
  border: none;
  color: black;
  background-color: greenyellow;
  border-radius: 5px;
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: green;
    color: white;
  }

  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    background-color: red;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    background-color: violet;
  }
  @media ${Dispositivos.mobileL} {
    background-color: green;
    border: none;
    color: black;
    background-color: greenyellow;
    border-radius: 5px;
    display: flex;
    margin-top: -10px;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: green;
      color: white;
    }
  }
  @media ${Dispositivos.tablet} {
    max-width: 768px;
    background-color: purple;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    background-color: gray;
    border: none;
    color: black;
    background-color: greenyellow;
    border-radius: 5px;
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: green;
      color: white;
    }
  }
  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
    background-color: blue;
  }
  @media ${Dispositivos.desktop} {
    max-width: 2560px;
    background-color: orange;
  }
`;

export const LiksProyects = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContenedorBodyTechologies = styled.div`
  margin-top: 10px;
`;

export const ImageBodyPortafolio = styled.img`
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    background-color: red;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    background-color: violet;
  }
  @media ${Dispositivos.mobileL} {
    background-color: green;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  @media ${Dispositivos.tablet} {
    max-width: 768px;
    background-color: purple;
  }
  @media ${Dispositivos.laptop} {
    background-color: gray;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
    background-color: blue;
  }
  @media ${Dispositivos.desktop} {
    max-width: 2560px;
    background-color: orange;
  }
`;

// @media ${Dispositivos.mobileS} {
//   max-width: 320px;
//   background-color: red;
// }
// @media ${Dispositivos.mobileM} {
//   max-width: 375px;
//   background-color: violet;
// }
// @media ${Dispositivos.mobileL} {
//   max-width: 425px;
//   background-color: green;
// }
// @media ${Dispositivos.tablet} {
//   max-width: 768px;
//   background-color: purple;
// }
// @media ${Dispositivos.laptop} {
//   max-width: 1024px;
//   background-color: gray;
// }
// @media ${Dispositivos.laptopL} {
//   max-width: 1440px;
//   background-color: blue;
// }
// @media ${Dispositivos.desktop} {
//   max-width: 2560px;
//   background-color: orange;
// }
