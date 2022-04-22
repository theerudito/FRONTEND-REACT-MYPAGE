import React from "react";
import { Liks } from "../Home/styles/Styles";
import Page404 from "./404.svg";
import styled from "styled-components";
import { Dispositivos } from "../Medias/Medidas";
import { RutasApp } from "../Helpers/Rutas";
import { Link } from "react-router-dom";

const ContenedorPrincipal404 = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  clear: both;
  overflow: hidden;

  @media ${Dispositivos.mobileS} {
    display: grid;
    grid-template-columns: repeat(1, 3fr);
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.mobileM} {
    
    display: grid;
    grid-template-columns: repeat(1, 3fr);
    align-items: center;
    justify-content: center;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.mobileL} {
    
    display: grid;
    grid-template-columns: repeat(1, 3fr);
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.tablet} {
    
    display: grid;
    grid-template-columns: repeat(1, 3fr);
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.blue} {
    
    display: grid;
    grid-template-columns: repeat(1, 3fr);
    align-items: center;
    justify-content: center;
  }
`;

const Img404 = styled.img`
  @media ${Dispositivos.mobileS} {
    margin: auto;
    width: 300px;
    height: 300px;
  }

  @media ${Dispositivos.mobileM} {
    width: 300px;
    height: 300px;
    clear: both;
    overflow: hidden;
  }

  @media ${Dispositivos.mobileL} {
    margin: auto;
    width: 400px;
    height: 400px;
  }
  @media ${Dispositivos.tablet} {
    margin: auto;
    width: 400px;
    height: 300px;
    
  }

  @media ${Dispositivos.laptop} {
    margin: auto;
    width: 800px;
    height: 400px;
  
  }
`;

const Titulo = styled.p`
  color: white;
  margin: auto;
  align-items: center;
  justify-content: center;
  display: grid;

  @media ${Dispositivos.mobileS} {
    margin-top: -60px;
  }

  @media ${Dispositivos.mobileM} {
    margin-top: -60px;
  }

  @media ${Dispositivos.mobileL} {
    margin-top: -80px;
  }
  @media ${Dispositivos.tablet} {
    margin-top: -10px;
  }

  @media ${Dispositivos.laptop} {
    margin-top: 10px;
  }
`;

const Boton = styled.button`
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  display: grid;
  border: none;
  border-radius: 10px;
  background-color: greenyellow;
  :hover {
    background-color: green;
    color: white;
  }
  @media ${Dispositivos.mobileS} {
    margin-top: -100px;
  }

  @media ${Dispositivos.mobileM} {
    margin-top: -100px;
  }
  @media ${Dispositivos.mobileL} {
    margin-top: -100px;
  }
  @media ${Dispositivos.tablet} {
    margin-top: -80px;
  }
  @media ${Dispositivos.laptop} {
    margin-top: -80px;
  }
`;

export const Page404App = () => {
  return (
    <>
      <ContenedorPrincipal404>
        <Img404 src={Page404} alt="perdido" />

        <Titulo>You are lost, maybe you want</Titulo>
        <Liks as={Link} to={RutasApp.home}>
          <Boton>Go Back Home</Boton>
        </Liks>
      </ContenedorPrincipal404>
    </>
  );
};
