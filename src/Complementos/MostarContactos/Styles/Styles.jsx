import styled from "styled-components";
import { Dispositivos } from "../../Medias/Medidas";


export const Titulo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonAccount = styled.button`
  margin: auto;
  background-color: orange;
  border-radius: 10px;
  border: none;
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
  height: 600px;
  clear: both;
  overflow: hidden;
`;

export const ContenedorTabla = styled.div`
  width: auto;
  margin: auto;
  font-size: 20px;

  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    font-size: 10px;
    width: 320px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    #hide {
      display: none;
    }
    #td,
    #th {
      width: 1px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media ${Dispositivos.mobileL} {
    max-width: 425px;
    font-size: 18px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    #hide {
      display: none;
    }
    #td,
    #th {
      width: 230px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    #hide {
      display: block;
      text-decoration: none;
      list-style: none;
      width: 230px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export const Tabla = styled.table`
  /* background-color: #282c34; */
  border: solid 1px orangered;
`;

export const Thead = styled.thead`
  color: red;
`;

export const TR = styled.tr`
  color: white;
`;

export const TH = styled.td`
  @media ${Dispositivos.mobileL} {
    max-width: 425px;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
  }
`;

export const TBody = styled.tbody``;

export const TD = styled.td`
  @media ${Dispositivos.mobileL} {
    max-width: 425px;
  }
  @media ${Dispositivos.laptopL} {
    max-width: 1200px;
  }
`;
