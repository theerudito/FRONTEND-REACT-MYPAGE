import English from "./img/en.png";
import Spanish from "./img/es.png";
import styled from "styled-components";
import { Dispositivos } from "../Medias/Medidas";
import { ContenedorHeader, ContenedorIconos, ContenedorMenu } from "../Home/styles/Styles";
import { NavBarMenu } from "../Menu/NavBarMenu";

import { Footer } from "../Footer/Footer";

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
`;

export const Curriculum = () => {
  return (
    <>


<ContenedorHeader>
        <ContenedorMenu>
          <NavBarMenu />
        </ContenedorMenu>

        
      </ContenedorHeader>

      <hr />
      <Contenedor>
        <FlagEnglish>
          <Titulos>Curriculum in English</Titulos>
          <a
            href="https://drive.google.com/file/d/1iKLQ8L3A6d5dE0dIESmeFi4i6NLX2jNW/view?usp=sharing"
            target="_blanck"
          >
            <Flag src={English} alt="english" />
          </a>
        </FlagEnglish>

        <FlagSpanish>
          <Titulos>Curriculum en Español</Titulos>
          <a
            href="https://drive.google.com/file/d/1pvTpWKhotcWqk-ko0XzmgV9W2HvcGtA4/view?usp=sharing"
            target="_blanck"
          >
            {" "}
            <Flag src={Spanish} alt="spanish" />
          </a>
        </FlagSpanish>
      </Contenedor>
      <Footer/>
    </>
  );
};
