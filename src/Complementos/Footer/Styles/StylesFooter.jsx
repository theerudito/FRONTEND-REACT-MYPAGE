import styled from "styled-components";
import { Dispositivos } from "../../Medias/Medidas";
import { ThemeDark, ThemeLight } from "../../Themes/Theme";

export const ContendorFooter = styled.div`
  width: 100%;
  min-height: 80vh;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.theme === "light" ? ThemeLight.footer : ThemeDark.footer};
  font-size: calc(10px + 2vmin);
  clear: both;
  overflow: hidden;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.mobileL} {
    max-width: 425px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.tablet} {
    max-width: 768px;
    min-height: 20px;
    margin: auto;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
  @media ${Dispositivos.desktop} {
    max-width: 2560px;
    min-height: 20px;
    margin: auto;
    clear: both;
    overflow: hidden;
  }
`;

export const ContenedorErudito = styled.div`
  margin: auto;
  display: flex;
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
  align-items: center;
  justify-content: center;
`;

export const ContenedorDerechos = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
`;
