import styled from "styled-components";
import { Dispositivos } from "../../../../Medias/Medidas";

export const DivStack = styled.div`
  border-radius: 10px;
  width: 400px;
  height: 300px;
  margin: auto;
  padding: 0;

  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    margin: auto;
  }
`;

export const StackImagen = styled.img`
  border-radius: 10px;
  max-width: 400px;
  height: 300px;
  margin: auto;
  padding: 5px 5px;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const PantallaCompleta = styled.div`
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin: auto;
    align-items: center;
    justify-content: center;
  }
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;
