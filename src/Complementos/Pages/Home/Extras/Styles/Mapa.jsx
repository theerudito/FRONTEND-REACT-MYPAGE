import styled from "styled-components";
import { Dispositivos } from "../../../../Medias/Medidas";

export const ContenedorEquipo = styled.div`
  width: 400px;
  margin: auto;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const FotoEquipo = styled.img`
  width: 400px;
  margin: auto;
  display: flex;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const ContendorCiudad = styled.div`
  width: 400px;
  margin: 10px auto;
  font-size: 15px;
  display: grid;
  justify-content: center;
  align-items: center;

  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const ContendorMapa = styled.div`
  width: 300px;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const Mapa = styled.iframe`
  width: 300px;
  height: 250px;
  border: solid 1px white;
  border-radius: 10px;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
`;

export const ContendorTemperatura = styled.div`
  margin: 30px auto;
  width: 250px;
  height: 200px;
  border: solid 1px white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
