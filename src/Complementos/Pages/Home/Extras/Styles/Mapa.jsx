import styled from "styled-components";
import { Dispositivos } from "../../../../Medias/Medidas";
//import { Dispositivos } from "../../../../Medias/Medidas";

export const ContenedorEquipo = styled.div`
  width: 400px;
  margin: auto;
`;

export const FotoEquipo = styled.img`
  width: 400px;
  margin: auto;
  display: flex;
  @media ${Dispositivos.mobileS} {
    max-width: 340px;
    margin: auto;
    display: grid;
    object-fit: contain;
    align-items: center;
    justify-content: center;
  }
`;

export const ContendorCiudad = styled.div`
  width: 400px;
  margin: 10px auto;
  font-size: 15px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const ContendorMapa = styled.div`
  width: 370px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Mapa = styled.iframe`
  width: 370px;
  height: 250px;
  border: solid 1px white;
  border-radius: 10px;
  display: flex;
  margin: auto;
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
`;

export const PantallaCompleta = styled.div`
  @media ${Dispositivos.laptop} {
    max-width: 1440px;
    width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
  }
`;
