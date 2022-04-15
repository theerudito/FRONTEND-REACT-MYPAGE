import styled from "styled-components";
import { Dispositivos } from "../../Medias/Medidas";

export const ContenedorPrincipal = styled.div`

  width: auto;
  height: auto;
  margin: auto;
  align-items: center;
  justify-content: center;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    margin: auto;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
`;

export const ContenedorContactos = styled.div`

  width: 300px;
  height: 300px;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: solid 1px;
  margin: 10px;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    margin: 10px auto;
    width: 200px;
    height: 200px;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    width: 300px;
    height: 300px;
  }
`;

export const ContenedorAccount = styled.div`

  width: 300px;
  height: 300px;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: solid 1px;
  margin: 10px;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    margin: 10px auto;
    width: 200px;
    height: 200px;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    width: 300px;
    height: 300px;
  }
`;

export const ContenedorPost = styled.div`
  background-color: green;
`;

export const Botones = styled.button`
  background-color: purple;
  border: solid 1px white;
  border-radius: 10px;
  color: coral;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  list-style: none;
  text-decoration: none;
  :hover {
    background-color: palegreen;
    color: black;
  }
`;
