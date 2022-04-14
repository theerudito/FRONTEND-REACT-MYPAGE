import React from "react";
import {
  ContendorInformacion,
  InforBackend,
  InforFrontend,
  TituloInfor,
} from "./Styles/Styles";

export const Informacion = () => {
  return (
    <>
      <ContendorInformacion>
        <InforFrontend>
          <TituloInfor>Desarrollador Frond-End</TituloInfor>
          <p>
            "Frontend es la parte de un programa o dispositivo a la que un
            usuario puede acceder directamente. Son todas las tecnologías de
            diseño y desarrollo web que corren en el navegador y que se encargan
            de la interactividad con los usuarios. Los desarrolladores frontend
            son aquellos que crean los componentes visuales de un sitio web. Dan
            formato a las imágenes, la animación y la interactividad de un sitio
            web"
          </p>
        </InforFrontend>
        <InforBackend>
          <TituloInfor>Desarrollador Back-End</TituloInfor>
          <p>
            "Backend es la capa de acceso a datos de un software o cualquier
            dispositivo, que no es directamente accesible por los usuarios.
            Además, contiene la lógica de la aplicación que maneja dichos datos.
            El Backend también accede al servidor, que es una aplicación
            especializada que entiende la forma en la que el navegador hace
            solicitudes. Los desarrolladores backend se encargan de hacer que la
            lógica del sitio funcione correctamente, la información se transmita
            de manera segura y el desempeño de la aplicación no entorpezca la
            experiencia del usuario".
          </p>
        </InforBackend>
      </ContendorInformacion>
    </>
  );
};
