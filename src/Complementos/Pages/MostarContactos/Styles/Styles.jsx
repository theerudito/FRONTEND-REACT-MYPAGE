import styled from "styled-components";
import { Dispositivos } from "../../../Medias/Medidas";

export const Titulo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BotonCrear = styled.button`
  background-color: blue;
  color: white;
  border-radius: 10px;
  border: none;
  margin: 10px auto;
  display: flex;
  transition: 0.5 ease-out;
  margin-bottom: 20px;

  &:hover {
    background-color: blueviolet;
    color: white;
  }
`;

export const BotonEliminar = styled.button`
  background-color: red;
  color: white;
  border-radius: 10px;
  border: none;
  margin: 0 5px;
  &:hover {
    background-color: royalblue;
    color: white;
  }
`;

export const BotonEditar = styled.button`
  background-color: orange;
  color: white;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: tomato;
    color: white;
  }
`;

export const BotonCerrarModal = styled.button`
  background-color: orange;
  color: white;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: tomato;
    color: white;
  }
`;

export const BotonGuardar = styled.button`
  background-color: orange;
  color: white;
  border-radius: 10px;
  border: solid 1px gray;
  margin: auto;
  display: flex;
  &:hover {
    background-color: tomato;
    color: white;
  }
`;

export const ContenedorFormulario = styled.div`
  color: black;
`;

export const ContenedorPrincipal = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 500px;
`;

export const ContenedorTabla = styled.div`
  width: 1200px;
  margin: auto;
  font-size: 20px;

`;

export const Tabla = styled.table`
  /* background-color: #282c34; */
  border: solid 1px orangered;
  border-radius: 10px;
`;

export const Thead = styled.thead`
  color: red;
`;

export const TR = styled.tr`
  color: white;
`;

export const TH = styled.td`
  
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    ;
  }
`;

export const TBody = styled.tbody`
  
`;

export const TD = styled.td`
  
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    
  }
`;
