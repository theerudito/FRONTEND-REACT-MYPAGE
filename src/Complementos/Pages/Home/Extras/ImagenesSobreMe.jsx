import React from "react";
import ubicacion from "../Extras/img/ubicacion.png";
import Yo from "../Extras/img/yo.jpg";
import Bandera from "../Extras/img/ec.png";
import Programador from "../Extras/img/programador.png";
import {
  ContendorFrase,
  ContendorProgramador,
  ContendorReloj,
  DivContenedorSaludo,
  DivContenedorUbicacion,
  DivFoto,
  Foto,
  FotoBandera,
  FotoProgramador,
  FotoUbicacion,
} from "../SobreMe/Styles/Styles";


import { RelojApp } from "./Reloj";

export const ImagenesSobreYo = () => {
  return (
    <>
      <DivFoto>
        <Foto src={Yo} alt="ubicacion" id="yo" />
      </DivFoto>

      <DivContenedorSaludo>
        <p id="minombre"> Soy Jorge Loor</p>
        <h5 id="frase">!Never Give Up..</h5>
      </DivContenedorSaludo>

      <DivContenedorUbicacion>
        <FotoUbicacion src={ubicacion} alt="ubicacion" id="ubicacion" />
        <p id="pais">Ecuador</p>
        <FotoBandera src={Bandera} alt="ubicacion" id="bandera" />
      </DivContenedorUbicacion>

      <ContendorReloj>
        <RelojApp />
      </ContendorReloj>

      <ContendorFrase>
      <ContendorProgramador>
        <FotoProgramador src={Programador} alt="ubicacion" id="programer" />
      </ContendorProgramador>


     
        <p>
          "Developer con conocimientos en varias herramientas todo lo
          aprendido ha sido de manera Autodidacta"
        </p>
      </ContendorFrase>

    </>
  );
};
