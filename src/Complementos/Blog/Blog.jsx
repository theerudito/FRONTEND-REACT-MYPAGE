import English from "./img/en.png";
import Spanish from "./img/es.png";
import styled from "styled-components";
import { Dispositivos } from "../Medias/Medidas";
import { ContenedorHeader, ContenedorMenu, HR } from "../Home/styles/Styles";
import { NavBarMenu } from "../Menu/NavBarMenu";
import ImageEnConstrucion from "./img//webconstruccion.gif";
import { Footer } from "../Footer/Footer";
import { ThemeDark, ThemeLight } from "../Themes/Theme";

const Contenedor = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  margin: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0px;
  clear: both;
  overflow: hidden;

  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    min-height: 70vh;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    min-height: 70vh;
  }
  @media ${Dispositivos.mobileL} {
    max-width: 425px;
    min-height: 70vh;
  }
  @media ${Dispositivos.tablet} {
    max-width: 768px;
    min-height: 90vh;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    min-height: 70vh;
  }
  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
    min-height: 80vh;
  }
  @media ${Dispositivos.desktop} {
    max-width: 2560px;
    min-height: 80vh;
  }
`;

const FlagSpanish = styled.div`
  margin: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin-top: -10px;
`;
const FlagEnglish = styled.div`
  margin: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

const Flag = styled.img`
  width: 200px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  border: solid 1px white;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
`;

const Titulos = styled.h4`
  width: 250px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  border-radius: 10px;
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
`;

export const Blog = () => {
  const theme = localStorage.getItem("theme");
  return (
    <>
      <ContenedorHeader>
        <ContenedorMenu>
          <NavBarMenu />
        </ContenedorMenu>
      </ContenedorHeader>
      <HR theme={theme} />

      <Contenedor theme={theme}>
        <img
          src={ImageEnConstrucion}
          style={{ width: "400px" }}
          alt="En Construccion"
        />
      </Contenedor>
      <Footer />
    </>
  );
};
