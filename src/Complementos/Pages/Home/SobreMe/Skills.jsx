import React from "react";
import { ContendorSkills } from "./Styles/Styles";

export const Skills = () => {
  return (
    <>
      <ContendorSkills>
        <li className="fila_0">
          <span className="fw-bold"></span>
          <ul className="lista_0">
            <li className="list_child fw-bold">Skills</li>
            <li className="list_child">React</li>
            <li className="list_child">JavaScript</li>
            <li className="list_child">HTML</li>
            <li className="list_child">CSS</li>
            <li className="list_child">Mongo-DB</li>
            <li className="list_child">MySQL</li>
            <li className="list_child">Node.js</li>
            <li className="list_child">Express.js</li>
            <li className="list_child">Git</li>
            <li className="list_child">Ilustrator</li>
            <li className="list_child">Unity</li>
          </ul>
        </li>

        <li className="fila_1">
          <span className="fw-bold"></span>

          <ul className="lista1">
            <li className="list_child fw-bold">Hobbies</li>
            <li className="list_child">Programar</li>
            <li className="list_child">Escuchar Musica</li>
            <li className="list_child">Turistiar</li>
            <li className="list_child">Comer</li>
            <li className="list_child">Jugar En El Movil</li>
            <li className="list_child">Aprender</li>
          </ul>
        </li>
      </ContendorSkills>
    </>
  );
};
