import React, { useState } from "react";
import { SocialMedia } from "../Porfolio/PostPorfolio";
import {
  Contenedor,
  ContenedorPrincipal,
  ImgPrincipal,
  ImgRedes,
  LinksRedes,
  Titulo1,
  Titulo2,
  Titulo3,
} from "./Styles";
import Programador from "../Home/img/programador.png";

export const RedesApp = () => {
  const [redes, setRedes] = useState(SocialMedia);

  return (
    <ContenedorPrincipal>
      <ImgPrincipal src={Programador} alt="erudito" />
      <Titulo1>Erudito Dev | Software Enginer</Titulo1>

      {redes.map((item) => (
        <Contenedor key={item.id}>
          <ImgRedes src={item.pic} alt="redes" />
          <LinksRedes href={item.url} target="_blanck">
            <Titulo2>{item.title} </Titulo2>
          </LinksRedes>
        </Contenedor>
      ))}
      <Titulo3>By Erudito Dev</Titulo3>
    </ContenedorPrincipal>
  );
};
