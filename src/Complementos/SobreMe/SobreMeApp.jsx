import { RelojApp } from "../Extras/Reloj";
import React from "react";

export const SobreMeApp = () => {
  return (
    <>
      <section
        className="w-50 mx-auto text-center pt-3 text-light fw-bold"
        id="intro"
      >
        <img src="./img/yo.jpg" alt="" id="foto" className="yo" />
        <h5>
          Soy{" "}
          <span className="text-primary fw-bold" id="letra">
            Jorge Loor
          </span>
        </h5>
        <h5>!Never Give Up..</h5>
        <img
          src="./img/ubicacion.png"
          alt=""
          width="20"
          height="20"
          className="yo"
          id="yo"
        />
        Ecuador
        <a href="https://es.wikipedia.org/wiki/Ecuador" target="_blanck">
          <img
            src="./img/ec.png"
            alt=""
            width="20"
            height="20"
            className="yo"
            id="yo"
          />
        </a>
        <div id="relojito">
          <RelojApp />
        </div>
        <img src="./img/programador.png" alt="" width="50" height="50" />
        <br />
        <div>
          <p id="comentario">
            "Front-End Developer con conocimientos en varias herramientas todo
            lo aprendido ha sido de manera Autodidacta :) y algo de Back-End."{" "}
          </p>
        </div>
      </section>
    </>
  );
};
