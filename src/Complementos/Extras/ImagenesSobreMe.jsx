import React from "react";
import ubicacion from "../Extras/img/ubicacion.png";
import Yo from "../Extras/img/yo.jpg";
import Bandera from "../Extras/img/ec.png";
import Programador from "../Extras/img/programador.png";

export const ImagenesSobreYo = () => {
  return (
    <>
      <img src={Yo} alt="ubicacion" id="yo" />
      <div id="ubiyban">
        <img src={ubicacion} alt="ubicacion" id="ubicacion" />
        <img src={Bandera} alt="ubicacion" id="bandera" />
      </div>
      <div id="programador">
        <img src={Programador} alt="ubicacion" id="programer" />
      </div>
    </>
  );
};
