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
  Eslogan,
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

import { LenguajeBarra, LenguajeEn, LenguajeEs } from "./Lenguaje";
import { ModoDark } from "./Modos";

import { NavBarMenu } from "../Menu/NavBarMenu";

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
import { SPANISH } from "../Languages/ES";
import { ENGLISH } from "../Languages/EN";

export const PageHome = () => {
  const dispach = useDispatch();
  const languages = localStorage.getItem("language");

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
        <div style={{ margin: "auto" }}>
          {languages === "ES" ? (
            <Eslogan>{SPANISH.slogan} </Eslogan>
          ) : (
            <Eslogan>{ENGLISH.slogan} </Eslogan>
          )}
        </div>

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

        {languages === "ES" ? (
          <Frase>
            {SPANISH.frase}
            <Red>@theerudito</Red>
          </Frase>
        ) : (
          <Frase>
            {ENGLISH.frase} <Red>@theerudito</Red>{" "}
          </Frase>
        )}
      </ContenedorFrase>

      <ContenedorTituloSkills>
        {languages === "ES" ? (
          <TituloSkills>{SPANISH.skill} </TituloSkills>
        ) : (
          <TituloSkills>{ENGLISH.skill} </TituloSkills>
        )}
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

      {languages === "ES" ? (
        <MisCursosTitulo>{SPANISH.myCourses} </MisCursosTitulo>
      ) : (
        <MisCursosTitulo>{ENGLISH.myCourses} </MisCursosTitulo>
      )}

      <ContenedorMisCursos>
        {courses.map((item) => (
          <CardMisCursos className="curso" key={item.id}>
            <ImgMisCursos src={item.pic} alt="miscursos" />
            <CardTitulo>
              <CursosTitulo>{item.title} </CursosTitulo>
              <CardButton>
                {languages === "ES" ? (
                  <Liks href={item.url} target="_blanck">
                    {SPANISH.goCourse}
                  </Liks>
                ) : (
                  <Liks href={item.url} target="_blanck">
                    {ENGLISH.goCourse}
                  </Liks>
                )}
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
