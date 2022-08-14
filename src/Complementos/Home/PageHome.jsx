import React, { useEffect } from "react";
import { FormularioHome } from "./Formularios";
import Yo from "./img/yo.jpg";
import Ubicacion from "./img/ubicacion.png";
import Pais from "./img/ecuador.png";
import Programador from "./img/programador.png";

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
  CursosTitulo,
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
  Titulos,
  TituloSkills,
  YoImagen,
} from "./styles/Styles";

import { RelojApp } from "./RelojApp";

//import { LenguajeBarra, LenguajeEn, LenguajeEs } from "./Lenguaje";
//import { ModoDark } from "./Modos";

import { NavBarMenu } from "../Menu/NavBarMenu";
import { Icons } from "../Footer/Icons";
import { Footer } from "../Footer/Footer";
import {
  MisCursos,
  Tecnologias1,
  Tecnologias2,
} from "../Porfolio/PostPorfolio";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourse,
  getTec1,
  getTec2,
} from "../../store/slices/edudito/erudito";

export const PageHome = () => {
  const dispach = useDispatch();

  const {
    courses = [],
    tecnology1 = [],
    tecnology2 = [],
  } = useSelector((state) => state.erudito);

  useEffect(() => {
    dispach(getCourse(MisCursos));
    dispach(getTec1(Tecnologias1));
    dispach(getTec2(Tecnologias2));
  }, [dispach]);

  return (
    <>
      <ContenedorHeader>
        <ContenedorMenu>
          <NavBarMenu />
        </ContenedorMenu>

        <ContenedorIconos>
          <Icons />
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
        <Red>!Never Give Up¡</Red>
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
          A self-taught developer who loves programming and video games every
          day a new goal to meet, you can find me on the networks as{" "}
          <Red>@theerudito</Red>
        </Frase>
      </ContenedorFrase>

      <ContenedorTituloSkills>
        <TituloSkills>My Skills</TituloSkills>
      </ContenedorTituloSkills>

      <ContenedorSkill>
        <ContenedorSkill1>
          {tecnology1.map((tec1) => (
            <CardSkills key={tec1.id}>
              <SkillsImg src={tec1.pic} alt="html" />
              <Titulos>{tec1.title} </Titulos>
            </CardSkills>
          ))}
        </ContenedorSkill1>
        <br />

        <ContenedorSkill2>
          {tecnology2.map((tec2) => (
            <CardSkills key={tec2.id}>
              <SkillsImg src={tec2.pic} alt="html" />
              <Titulos>{tec2.title} </Titulos>
            </CardSkills>
          ))}
        </ContenedorSkill2>
      </ContenedorSkill>

      <MisCursosTitulo>My Courses</MisCursosTitulo>

      <ContenedorMisCursos>
        {courses.map((item) => (
          <CardMisCursos className="curso" key={item.id}>
            <ImgMisCursos src={item.pic} alt="miscursos" />
            <CardTitulo>
              <CursosTitulo>{item.title} </CursosTitulo>
              <CardButton>
                <Liks href={item.url} target="_blanck">
                  Go to Course
                </Liks>
              </CardButton>
            </CardTitulo>
          </CardMisCursos>
        ))}
      </ContenedorMisCursos>

      <div>
        <FormularioHome />
      </div>

      <Footer />
    </>
  );
};
