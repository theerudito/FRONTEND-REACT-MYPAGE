import styled from "styled-components";
import { Dispositivos } from "../../Medias/Medidas";
import { ThemeDark, ThemeLight } from "../../Themes/Theme";

export const TituloPortafolio = styled.p`
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
`;

export const ContenedorPrincipalPorfolio = styled.div`
  @media ${Dispositivos.mobileS} {
    margin: auto;
    display: grid;
    gap: 10px;
    width: auto;
    margin: auto;
    margin: auto;
    align-items: center;
    justify-content: center;
    height: auto;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${Dispositivos.mobileM} {
    margin: auto;
    display: grid;
    gap: 10px;
    width: auto;
    margin: auto;
    margin: auto;
    align-items: center;
    justify-content: center;
    height: auto;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${Dispositivos.mobileL} {
    margin: auto;
    display: grid;
    gap: 10px;
    width: auto;
    margin: auto;
    margin: auto;
    align-items: center;
    justify-content: center;
    height: auto;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${Dispositivos.tablet} {
    margin: auto;
    display: grid;
    gap: 10px;
    width: auto;
    margin: auto;
    height: auto;
    align-items: center;
    justify-content: center;
    height: auto;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${Dispositivos.laptop} {
    margin: auto;
    display: grid;
    gap: 10px;
    width: 800px;
    margin: auto;
    height: auto;
    align-items: center;
    justify-content: center;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${Dispositivos.laptopL} {
    margin: auto;
    display: grid;
    gap: 10px;
    width: 800px;
    margin: auto;
    height: auto;
    align-items: center;
    justify-content: center;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${Dispositivos.desktop} {
    margin: auto;
    display: grid;
    gap: 10px;
    width: 800px;
    margin: auto;
    height: auto;
    align-items: center;
    justify-content: center;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContenedorCardPortafolio = styled.div`
  @media ${Dispositivos.mobileS} {
    background-color: #181a2b;
    border-radius: 5px;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 280px;
    height: 160px;
    grid-template-columns: repeat(2, 1fr);
    :hover {
      background-color: #181a2b;
      
    }
  }
  @media ${Dispositivos.mobileM} {
    background-color: #181a2b;
    border-radius: 5px;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 280px;
    height: 160px;
    grid-template-columns: repeat(2, 1fr);
    :hover {
      background-color: #181a2b;
      
    }
  }
  @media ${Dispositivos.mobileL} {
    background-color: #181a2b;
    border-radius: 5px;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 380px;
    height: 200px;
    grid-template-columns: repeat(2, 1fr);
    :hover {
      background-color: #181a2b;
      
    }
  }
  @media ${Dispositivos.tablet} {
    background-color: #181a2b;
    border-radius: 5px;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 500px;
    height: 250px;
    grid-template-columns: repeat(2, 4fr);
    :hover {
      background-color: #181a2b;
     
    }
  }
  @media ${Dispositivos.laptop} {
    background-color: #181a1b;
    border-radius: 5px;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 560px;
    height: 300px;
    grid-template-columns: repeat(2, 4fr);
    :hover {
      background-color: #181a2b;
      
    }
  }
  @media ${Dispositivos.laptopL} {
    background-color: #181a1b;
    border-radius: 5px;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 560px;
    height: 300px;
    grid-template-columns: repeat(2, 4fr);
    :hover {
      background-color: #181a2b;
      
  }
  @media ${Dispositivos.desktop} {
    background-color: #181a1b;
    border-radius: 5px;
    margin: auto;
    display: grid;
    gap: 10px;
    width: 560px;
    height: 300px;
    grid-template-columns: repeat(2, 4fr);
    :hover {
      background-color: #181a2b;
     
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
    width: 80px;
    height: 145px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 8px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media ${Dispositivos.mobileM} {
    width: 80px;
    height: 145px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 8px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media ${Dispositivos.mobileL} {
    width: 138px;
    height: 182px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 8px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media ${Dispositivos.tablet} {
    width: 215px;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media ${Dispositivos.laptop} {
    width: 245px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media ${Dispositivos.laptopL} {
    width: 245px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media ${Dispositivos.desktop} {
    width: 245px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ContenedorBodyPortafolio = styled.div`
  @media ${Dispositivos.mobileS} {
    height: 130px;
    width: 180px;
    margin-top: 25px;
  }
  @media ${Dispositivos.mobileM} {
    height: 130px;
    width: 180px;
    margin-top: 25px;
  }
  @media ${Dispositivos.mobileL} {
    width: 220px;
    height: 60px;
    margin-top: 15px;
  }
  @media ${Dispositivos.tablet} {
    width: 260px;
    height: 230px;
    margin-top: 5px;
  }
  @media ${Dispositivos.laptop} {
    width: 280px;
    height: 288px;
    margin-top: 5px;
  }
  @media ${Dispositivos.laptopL} {
    width: 280px;
    height: 288px;
    margin-top: 5px;
  }
  @media ${Dispositivos.desktop} {
    width: 280px;
    height: 288px;
    margin-top: 5px;
  }
`;

export const ContenedorTitleYGitHub = styled.div`
  @media ${Dispositivos.mobileS} {
    display: grid;
    margin-left: -10px;
    margin-top: -15px;
    border-bottom: 1px solid white;
    font-size: 12px;
  }
  @media ${Dispositivos.mobileM} {
    display: grid;
    margin-left: -10px;
    margin-top: -15px;
    border-bottom: 1px solid white;
    font-size: 12px;
  }
  @media ${Dispositivos.mobileL} {
    display: grid;
    margin-left: -17px;
    margin-top: 2px;
    border-bottom: 1px solid white;
    font-size: 16px;
  }
  @media ${Dispositivos.tablet} {
    display: grid;
    margin-left: -17px;
    margin-top: 15px;
    border-bottom: 1px solid white;
    font-size: 16px;
  }
  @media ${Dispositivos.laptop} {
    display: grid;
    margin-left: -22px;
    border-bottom: 1px solid white;
    font-size: 20px;
  }
  @media ${Dispositivos.laptopL} {
    display: grid;
    margin-left: -22px;
    border-bottom: 1px solid white;
    font-size: 20px;
  }
  @media ${Dispositivos.desktop} {
    display: grid;
    margin-left: -22px;
    border-bottom: 1px solid white;
    font-size: 20px;
  }
`;

export const TitlePortafolio = styled.p`
  @media ${Dispositivos.mobileS} {
    color: white;
    margin-top: 10px;
    margin-left: 10px;
    width: 150px;
    fornt-size: 12px;
  }
  @media ${Dispositivos.mobileM} {
    color: white;
    margin-top: 10px;
    margin-left: 10px;
    width: 150px;
    fornt-size: 12px;
  }
  @media ${Dispositivos.mobileL} {
    color: white;
    margin-top: -10px;
    margin-left: 10px;
    width: 300px;
  }
  @media ${Dispositivos.tablet} {
    color: white;
    margin-top: 10px;
    margin-left: 10px;
    width: 280px;
    fornt-size: 20px;
  }
  @media ${Dispositivos.laptop} {
    color: white;
    margin-top: 10px;
    margin-left: 10px;
    width: 280px;
    fornt-size: 20px;
  }
  @media ${Dispositivos.laptopL} {
    color: white;
    margin-top: 10px;
    margin-left: 10px;
    width: 280px;
    fornt-size: 20px;
  }
  @media ${Dispositivos.desktop} {
    color: white;
    margin-top: 10px;
    margin-left: 10px;
    width: 280px;
    fornt-size: 20px;
  }
`;

export const ImageGitGub = styled.img`
  @media ${Dispositivos.mobileS} {
    width: 25px;
    margin-left: auto;
    margin-right: 5px;
    margin-top: -30px;
    cursor: pointer;
  }
  @media ${Dispositivos.mobileM} {
    width: 25px;
    margin-left: auto;
    margin-right: 5px;
    margin-top: -30px;
    cursor: pointer;
  }
  @media ${Dispositivos.mobileL} {
    width: 25px;
    margin-left: auto;
    margin-right: 5px;
    margin-top: -30px;
    cursor: pointer;
  }
  @media ${Dispositivos.tablet} {
    width: 40px;
    margin-left: auto;
    margin-right: 5px;
    margin-top: -20px;
    cursor: pointer;
  }
  @media ${Dispositivos.laptop} {
    width: 40px;
    margin-left: auto;
    margin-right: 5px;
    margin-top: -20px;
    cursor: pointer;
  }
  @media ${Dispositivos.laptopL} {
    width: 40px;
    margin-left: auto;
    margin-right: 5px;
    margin-top: -20px;
    cursor: pointer;
  }
  @media ${Dispositivos.desktop} {
    width: 40px;
    margin-left: auto;
    margin-right: 5px;
    margin-top: -20px;
    cursor: pointer;
  }
`;

export const ContenedorInfoPortafolio = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  margin-top: 30px;
`;

export const TitleBodyPortafolio = styled.p`
  @media ${Dispositivos.mobileS} {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 10px;
    font-size: 12px;
  }
  @media ${Dispositivos.mobileM} {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 10px;
    font-size: 12px;
  }
  @media ${Dispositivos.mobileL} {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 10px;
    font-size: 16px;
  }
  @media ${Dispositivos.tablet} {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 10px;
    font-size: 18px;
  }
  @media ${Dispositivos.laptop} {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 10px;
    font-size: 18px;
  }
  @media ${Dispositivos.laptopL} {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 10px;
    font-size: 18px;
  }
  @media ${Dispositivos.desktop} {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 10px;
    font-size: 18px;
  }
`;

export const ButtonBodyPortafolio = styled.button`
  @media ${Dispositivos.mobileS} {
    border: none;
    color: black;
    background-color: greenyellow;
    border-radius: 5px;
    display: flex;
    margin-top: -20px;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: green;
      color: white;
    }
  }
  @media ${Dispositivos.mobileM} {
    border: none;
    color: black;
    background-color: greenyellow;
    border-radius: 5px;
    display: flex;
    margin-top: -20px;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: green;
      color: white;
    }
  }
  @media ${Dispositivos.mobileL} {
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
    border: none;
    color: black;
    background-color: greenyellow;
    border-radius: 5px;
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: green;
      color: white;
    }
  }
  @media ${Dispositivos.laptop} {
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
  @media ${Dispositivos.desktop} {
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
`;

export const LiksProyects = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContenedorBodyTechologies = styled.div`
  @media ${Dispositivos.mobileS} {
  }
  @media ${Dispositivos.mobileM} {
  }
  @media ${Dispositivos.mobileL} {
    margin-top: -1px;
  }
  @media ${Dispositivos.tablet} {
    margin-top: 10px;
  }
  @media ${Dispositivos.laptop} {
    margin-top: 10px;
    margin-left: -15px;
  }
  @media ${Dispositivos.laptopL} {
    margin-top: 10px;
    margin-left: -15px;
  }
  @media ${Dispositivos.desktop} {
    margin-top: 10px;
    margin-left: -15px;
  }
`;

export const ImageBodyPortafolio = styled.img`
  @media ${Dispositivos.mobileS} {
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  @media ${Dispositivos.mobileM} {
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  @media ${Dispositivos.mobileL} {
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  @media ${Dispositivos.tablet} {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  @media ${Dispositivos.laptop} {
    width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  @media ${Dispositivos.laptopL} {
    width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  @media ${Dispositivos.desktop} {
    width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;
