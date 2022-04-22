import styled from "styled-components";
import { Dispositivos } from "../../Medias/Medidas";


export const ContendorFooter = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-color: #050505;
  color: aliceblue;
  font-size: calc(10px + 2vmin);
  clear: both;
  overflow: hidden;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.mobileL} {
    max-width: 425px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.tablet} {
    max-width: 768px;
    min-height: 20px;
    margin: auto;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.desktop} {
    max-width: 2560px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
`;

export const ContenedorErudito = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContenedorDerechos = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContenedorRedesSoliales = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;
`;
