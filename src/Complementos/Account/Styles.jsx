import styled from "styled-components";
import { Dispositivos } from "../Medias/Medidas";
import { ThemeDark, ThemeLight } from "../Themes/Theme";

export const ContenedorPrincipal = styled.div`
  width: auto;
  height: auto;
  margin: auto;
  margin-top: -40px;
  align-items: center;
  justify-content: center;
  @media ${Dispositivos.mobileM} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }

  @media ${Dispositivos.mobileL} {
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
`;

export const ContenedorTitleAccount = styled.div`
  margin: auto;
  margin-top: -40px;
  display: flex;
  alignitem: center;
  justifycontent: center;
`;

export const TitlePrincipalAccount = styled.h1`
  margin: 40px auto;
  display: flex;
  alignitem: center;
  justifycontent: center;
  color: ${(props) =>
    props.theme === "dark" ? ThemeDark.color : ThemeLight.color};
`;

export const ContenedorContactos = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: ${(props) =>
    props.theme === "light" ? ThemeLight.borderReloj : ThemeDark.borderReloj};
  margin: 10px;
  @media ${Dispositivos.mobileM} {
    max-width: 320px;
    margin: 10px auto;
    width: 140px;
    height: 280px;
  }

  @media ${Dispositivos.mobileL} {
    margin: 10px auto;
    width: 200px;
    height: 280px;
  }

  @media ${Dispositivos.tablet} {
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
  border: ${(props) =>
    props.theme === "light" ? ThemeLight.borderReloj : ThemeDark.borderReloj};
  margin: 10px;
  @media ${Dispositivos.mobileM} {
    margin: 10px auto;
    width: 140px;
    height: 280px;
  }

  @media ${Dispositivos.mobileL} {
    margin: 10px auto;
    width: 200px;
    height: 280px;
  }

  @media ${Dispositivos.tablet} {
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
  border: ${(props) =>
    props.theme === "light" ? ThemeLight.borderReloj : ThemeDark.borderReloj};
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
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
  @media ${Dispositivos.mobileM} {
    width: 120px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: purple;
    border: solid 1px white;
    border-radius: 10px;
  }

  @media ${Dispositivos.mobileL} {
    width: 140px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: purple;
    border: solid 1px white;
    border-radius: 10px;
  }

  @media ${Dispositivos.tablet} {
    width: 150px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: purple;
    border: solid 1px white;
    border-radius: 10px;
  }
  @media ${Dispositivos.laptop} {
    width: 180px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: purple;
    border: solid 1px white;
    border-radius: 10px;
    color: white;
  }
`;

export const ContenedorName = styled.h1`
  font-size: 18px;
  width: 280px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
`;

export const ContenedorRol = styled.h1`
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
  @media ${Dispositivos.mobileM} {
    font-size: 12px;
    width: 120px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${Dispositivos.laptop} {
    font-size: 18px;
    width: 180px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
