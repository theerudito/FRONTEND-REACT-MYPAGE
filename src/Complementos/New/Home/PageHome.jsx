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
import { LenguajeBarra, LenguajeEn, LenguajeEs } from "./Lenguaje";
import { ModoDark } from "./Modos";
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
      <ContenedorModos>
        <ContenedorLenguaje>
          <LenguajeEs />
          <LenguajeBarra />
          <LenguajeEn />
        </ContenedorLenguaje>

        <ContenedorThemes>
          <ModoDark />
        </ContenedorThemes>
      </ContenedorModos>

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
            <SkillsImg src={Skills.css} width="45" height="45" alt="CSS" />
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
            <SkillsImg src={Skills.express} alt="express" />
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
        </ContenedorSkill2>
      </ContenedorSkill>

      <MisCursosTitulo>Mis Cursos</MisCursosTitulo>

      <ContenedorMisCursos>
        <CardMisCursos className="curso">
          <ImgMisCursos src={Courses} alt="miscursos" />
          <CardTitulo>
            <TituloCurso>HTML</TituloCurso>
            <CardButton>Ir a Curso</CardButton>
          </CardTitulo>
        </CardMisCursos>

        <CardMisCursos className="curso">
          <ImgMisCursos src={Courses} alt="miscursos" />
          <CardTitulo>
            <TituloCurso>CSS</TituloCurso>
            <CardButton>Ir a Curso</CardButton>
          </CardTitulo>
        </CardMisCursos>
      </ContenedorMisCursos>

      <div>
        <FormularioHome />
      </div>
    </>
  );
};
