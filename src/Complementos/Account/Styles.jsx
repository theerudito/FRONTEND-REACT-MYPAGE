import styled from "styled-components";
import { Dispositivos } from "../Medias/Medidas";


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
    grid-template-columns: repeat(3, 1fr);
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
    height: 280px;
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
    height: 280px;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    width: 300px;
    height: 300px;
  }
`;

export const ContenedorPost = styled.div`
  background-color: grey;
`;

export const ContenedorA = styled.div`
  display: grid;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin-top: -20px;
`;

export const ContenedorPerfil = styled.img`
  width: 100px;
  height: 100px;
  margin: auto;
  border: solid 2px white;
  border-radius: 50%;
  object-fit: cover;
`;

export const ContenedorTitulo = styled.h1`
  width: 180px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: purple;
  border: solid 1px white;
  border-radius: 10px;
  color: white;
`;

export const ContenedorName = styled.h1`
  font-size: 18px;
  width: 280px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContenedorRol = styled.h1`
  font-size: 18px;
  width: 180px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Botones = styled.button`
  background-color: purple;
  border: solid 1px white;
  border-radius: 10px;
  color: white;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 120px;
  text-decoration: none;
  :hover {
    background-color: palegreen;
    color: black;
  }
`;
