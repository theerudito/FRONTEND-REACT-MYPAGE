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
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
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
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;


