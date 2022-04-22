import React from "react";
import { Tierrita } from "./Tierrita";
import equipo from "../Extras/img/sobreme.jpg";
import { ClimaApp } from "./ClimaApp";
import Stack from "../Extras/img/stack.png";

import {
  ContendorCiudad,
  ContendorMapa,
  ContendorTemperatura,
  ContenedorEquipo,
  FotoEquipo,
  Mapa,
  PantallaCompleta,
} from "./Styles/Mapa";
import { DivStack, StackImagen } from "./Styles/StyleStack";

const map =
  "https://www.google.com/maps/embed?pb=!4v1643061480277!6m8!1m7!1sR0eXAEN6bwlyd-MZXnbj6g!2m2!1d-0.2111384403907714!2d-79.11275535317631!3f230.52825118808192!4f4.809187930852232!5f0.7820865974627469";

export const MapaApp = () => {
  return (
    <>
      <ContenedorEquipo>
        <FotoEquipo src={equipo} alt="equipo" />
      </ContenedorEquipo>

      <ContendorCiudad>
        <h4>Santo Domingo - Ecuador</h4>
        <Tierrita />
      </ContendorCiudad>

      <PantallaCompleta>
        <ContendorMapa>
          <Mapa title="Erudito" src={map} loading="lazy"></Mapa>
        </ContendorMapa>

        <ContendorTemperatura>{<ClimaApp />}</ContendorTemperatura>

        <DivStack>
          <StackImagen src={Stack} />
        </DivStack>
      </PantallaCompleta>

      <hr />
    </>
  );
};
