import styled from "styled-components";
import { Dispositivos } from "../../../../Medias/Medidas";

export const DivStack = styled.div`
  border-radius: 10px;
  width: 400px;
  height: 300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  @media ${Dispositivos.mobileS} {
    width: 300px;
    height: 250px;
  }
`;

export const StackImagen = styled.img`
  border-radius: 10px;
  max-width: 400px;
  height: 300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 5px;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
  @media ${Dispositivos.mobileS} {
    width: 300px;
    height: 250px;
    margin: auto;
    display: grid;
    object-fit: auto;
    align-items: center;
    justify-content: center;
  }
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
