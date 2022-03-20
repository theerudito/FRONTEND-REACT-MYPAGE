import { RelojApp } from "../Extras/Reloj";
import React from "react";
import { ImagenesSobreYo } from "../Extras/ImagenesSobreMe";

export const SobreMeApp = () => {
  return (
    <div id="sobreme">
      <ImagenesSobreYo />

      <div id="saludo">
        <p id="minombre"> Soy Jorge Loor</p>
        <h5 id="frase">!Never Give Up..</h5>
        <p id="pais">Ecuador</p>
        <div id="reloj">
          <RelojApp />
        </div>
      </div>

      <div id="comentario">
        <p>
          "Developer con conocimientos en varias herramientas todo lo
          aprendido ha sido de manera Autodidacta"
        </p>
      </div>
    </div>
  );
};
