import React from "react";
import { FormularioHome } from "./Formularios";
import Yo from "./img/yo.jpg";
import Ubicacion from "./img/ubicacion.png";
import Pais from "./img/ecuador.png";
import Programador from "./img/programador.png";
import Courses from "./img/programin.png";

import {
  CardButton,
  CardMisCursos,
  CardSkills,
  CardTitulo,
  ContendorSobreME,
  ContendorUbiYPais,
  ContenedorFrase,
  ContenedorHeader,
  ContenedorIconos,
  ContenedorLenguaje,
  ContenedorMenu,
  ContenedorMisCursos,
  ContenedorModos,
  ContenedorReloj,
  ContenedorSkill,
  ContenedorSkill1,
  ContenedorSkill2,
  ContenedorThemes,
  ContenedorTituloSkills,
  Ec,
  Ecuador,
  Frase,
  ImgMisCursos,
  Liks,
  Localitation,
  MisCursosTitulo,
  ProgramdorStyled,
  Red,
  SkillsImg,
  TituloCurso,
  Titulos,
  TituloSkills,
  YoImagen,
} from "./styles/Styles";

import { RelojApp } from "./RelojApp";
import { Skills } from "./Skills";
import { IconosApp } from "./Iconos";
//import { LenguajeBarra, LenguajeEn, LenguajeEs } from "./Lenguaje";
//import { ModoDark } from "./Modos";
import { NavBarMenu } from "../Menu/NavBarMenu";

export const PageHome = () => {
  return (
    <>
      <ContenedorHeader>
        <ContenedorMenu>
          <NavBarMenu />
        </ContenedorMenu>

        <ContenedorIconos>
          <IconosApp />
        </ContenedorIconos>
      </ContenedorHeader>

      <hr />
      {/* <ContenedorModos>
        <ContenedorLenguaje>
          <LenguajeEs />
          <LenguajeBarra />
          <LenguajeEn />
        </ContenedorLenguaje>

        <ContenedorThemes>
          <ModoDark />
        </ContenedorThemes>
      </ContenedorModos> */}

      <ContendorSobreME>
        <YoImagen src={Yo} alt="yo" />
        <ContendorUbiYPais>
          <Ecuador src={Ubicacion} alt="ubicacion" />
          <Ec> Ecuador</Ec>

          <Localitation src={Pais} alt="Ecuador" />
        </ContendorUbiYPais>
      </ContendorSobreME>
      <ContenedorReloj>
        <RelojApp />
      </ContenedorReloj>
      <ContenedorFrase>
        <ProgramdorStyled src={Programador} alt="programador" />
        <Frase>
          Un Desarrollador autodidacta amante de la programacion y de los videos
          juegos cada dia una nueva meta por cumplir, me puedes encontrar en las
          redes como <Red>@theerudito</Red>
        </Frase>
      </ContenedorFrase>

      <ContenedorTituloSkills>
        <TituloSkills>Mis Skills</TituloSkills>
      </ContenedorTituloSkills>

      <ContenedorSkill>
        <ContenedorSkill1>
          <CardSkills>
            <SkillsImg src={Skills.html} alt="html" />
            <Titulos>HTML</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.javascript} alt="js" />
            <Titulos>Javascript</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.css} alt="CSS" />
            <Titulos>CSS</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.bootstrap} alt="bootstrap" />
            <Titulos>Bootstrap</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.vscode} alt="VS Code" />
            <Titulos>VS Code</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.react} alt="react" />
            <Titulos>React</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.figma} alt="figma" />
            <Titulos>Figma</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.illistrator} alt="illustrator" />
            <Titulos>Illustrator</Titulos>
          </CardSkills>
        </ContenedorSkill1>
        <br />

        <ContenedorSkill2>
          <CardSkills>
            <SkillsImg src={Skills.styledc} alt="styled-components" />
            <Titulos>StyledC</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.npm} alt="NPM" />
            <Titulos>NPM</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg
              src={Skills.express}
              alt="express"
              style={{ background: "#301a2b", borderRadius: "50%" }}
            />
            <Titulos>Express</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.firebase} alt="Firebase" />
            <Titulos>Firebase</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.mongodb} alt="mongodb" />
            <Titulos>MongoDB</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.mysql} alt="mysql" />
            <Titulos>MySQL</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg src={Skills.git} alt="git" />
            <Titulos>GIT</Titulos>
          </CardSkills>

          <CardSkills>
            <SkillsImg
              src={Skills.github}
              alt="github"
              style={{ background: "white", borderRadius: "50%" }}
            />
            <Titulos>GitHub</Titulos>
          </CardSkills>
        </ContenedorSkill2>
      </ContenedorSkill>

      <MisCursosTitulo>Mis Cursos</MisCursosTitulo>

      <ContenedorMisCursos>
        <CardMisCursos className="curso">
          <ImgMisCursos src={Skills.html} alt="miscursos" />
          <CardTitulo>
            <TituloCurso>HTML</TituloCurso>
            <CardButton >
              <Liks
                href="https://www.freecodecamp.org/certification/theerudito/responsive-web-design"
                target="_blanck"
              >
                Ir a Curso
              </Liks>
            </CardButton>
          </CardTitulo>
        </CardMisCursos>

        <CardMisCursos className="curso">
          <ImgMisCursos src={Skills.css} alt="miscursos" />
          <CardTitulo>
            <TituloCurso>CSS</TituloCurso>
            <CardButton>
              <Liks
                href="https://www.freecodecamp.org/certification/theerudito/responsive-web-design"
                target="_blanck"
              >
                Ir a Curso
              </Liks>
            </CardButton>
          </CardTitulo>
        </CardMisCursos>

        <CardMisCursos className="curso">
          <ImgMisCursos src={Skills.javascript} alt="miscursos" />
          <CardTitulo>
            <TituloCurso>JavaScript</TituloCurso>
            <CardButton>
              {" "}
              <Liks
                href="https://www.freecodecamp.org/certification/theerudito/javascript-algorithms-and-data-structures"
                target="_blanck"
              >
                Ir a Curso
              </Liks>
            </CardButton>
          </CardTitulo>
        </CardMisCursos>

        <CardMisCursos className="curso">
          <ImgMisCursos src={Skills.react} alt="miscursos" />
          <CardTitulo>
            <TituloCurso>React</TituloCurso>
            <CardButton>
              <Liks
                href="https://ed.team/@iamerudito/curso/reactjs"
                target="_blanck"
              >
                Ir a Curso
              </Liks>{" "}
            </CardButton>
          </CardTitulo>
        </CardMisCursos>
      </ContenedorMisCursos>

      <div>
        <FormularioHome />
      </div>
    </>
  );
};
