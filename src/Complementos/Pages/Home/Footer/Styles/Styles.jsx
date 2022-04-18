import styled from "styled-components";
import { Dispositivos } from "../../../../Medias/Medidas";

export const ContendorFooter = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  clear: both;
  overflow: hidden;


  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    min-height: 20px;
    margin: auto;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    min-height: 20px;
    margin: auto;
  }
  @media ${Dispositivos.mobileL} {
    max-width: 425px;
    min-height: 20px;
    margin: auto;
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
  }

  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
    min-height: 20px;
    margin: auto;
  }

  @media ${Dispositivos.desktop} {
    max-width: 2560px;
    min-height: 20px;
    margin: auto;
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
