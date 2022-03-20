import React from "react";
import { Tierrita } from "./Tierrita";
import equipo from "../Extras/img/sobreme.jpg";
import { ClimaApp } from "./ClimaApp";


const map =
  "https://www.google.com/maps/embed?pb=!4v1643061480277!6m8!1m7!1sR0eXAEN6bwlyd-MZXnbj6g!2m2!1d-0.2111384403907714!2d-79.11275535317631!3f230.52825118808192!4f4.809187930852232!5f0.7820865974627469";

export const MapaApp = () => {
  return (
    <>
      <div id="equipo">
        <img src={equipo} alt="equipo" id="equipo" />
      </div>

      <div className="infor">
        <div id="mapa">
          <iframe title="Erudito" src={map} loading="lazy" id="map"></iframe>
        </div>

        <div id="city">
          <h1>Santo Domingo - Ecuador</h1>
        </div>
        <h2 id="typewriter">
          <Tierrita />
        </h2>

        <p>{<ClimaApp />}</p>
      </div>
      <hr />
    </>
  );
};
