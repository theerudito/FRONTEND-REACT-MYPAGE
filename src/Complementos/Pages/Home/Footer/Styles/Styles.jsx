import styled from "styled-components";
import { Dispositivos } from "../../../../Medias/Medidas";

export const ContendorFooter = styled.div`

  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    margin: auto;
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
