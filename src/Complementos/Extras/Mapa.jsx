import React from "react";
import { Tierrita } from "./Tierrita";

export const MapaApp = () => {
  return (
    <>
      <div id="equipo">
        <img src="./img/sobreme.jpg" alt="equipo" id="equipo" />
      </div>

      <div className="infor">
        <div id="mapa">
          <iframe
            title="Erudito"
            src="https://www.google.com/maps/embed?pb=!4v1643061480277!6m8!1m7!1sR0eXAEN6bwlyd-MZXnbj6g!2m2!1d-0.2111384403907714!2d-79.11275535317631!3f230.52825118808192!4f4.809187930852232!5f0.7820865974627469"
            allowfullscreen=""
            loading="lazy"
            width="400"
            height="400"
            id="map"
          ></iframe>
        </div>

        <div id="city">
          <h1>Santo Domingo - Ecuador</h1>
          <h2 id="typewriter">
            <Tierrita />
          </h2>
        </div>

        <div id="temp">
          <p id="temperatura">Temperatura!</p>
          <h5 id="temperatura-valor">sdf</h5>
          <h6 id="temperatura-descripcion">fdf</h6>

          <h6 id="ubicacion"></h6>
          <img id="icono-animado" src="" width="80" height="80" />

          <h6 id="viento">Velocidad del Viento</h6>
          <h6 id="viento-velocidad"></h6>
        </div>
      </div>
      <hr/>
    </>
  );
};
