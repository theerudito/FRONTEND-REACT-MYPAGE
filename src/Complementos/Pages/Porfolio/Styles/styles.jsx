import styled from "styled-components";
import { Dispositivos } from "../../../Medias/Medidas";

export const ContenedorPortafolio = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  /* 
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.mobileL} {
    max-width: 425px;
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.tablet} {
    max-width: 768px;
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: center;
  } */
`;

export const ContenedorTituloPortafolio = styled.div`
  display: grid;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

export const ContenedorCarrusel1 = styled.div`
  width: 400px;
  height: 400px;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: solid 1px;
  border-radius: 10px;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const ContenedorCarrusel2 = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  border: solid 1px;
  border-radius: 10px;
  @media ${Dispositivos.mobileS} {
    max-width: 310px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 355px;
  }
`;

export const ContenedorMainCard = styled.div`
  width: auto;
  height: 400px;
`;

export const ContenedorCardTitulo = styled.div`
  margin: 5px auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.i`
  position: absolute;
  margin-left: 10px;
  margin-top: -18px;
`;

export const ContenedorImagen = styled.img`
  display: grid;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 260px;
  border: solid 1px purple;
  border-radius: 10px;
  @media ${Dispositivos.mobileS} {
    max-width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 330px;
  }
`;

export const ContenedorBoton = styled.div`
  display: flex;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
`;

export const ContenedorCard = styled.div``;

export const ContenedorCardCuerpo = styled.div``;

export const ContenedorCarrusel3 = styled.div``;

export const ContenedorBody = styled.div``;

export const ContenedorCarruselTitulo = styled.div``;
