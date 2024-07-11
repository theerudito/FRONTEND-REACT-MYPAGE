import React, { useEffect } from "react";
import { FormularioHome } from "./Formularios";
import Yo from "./img/yo.jpg";
import Ubicacion from "./img/ubicacion.png";
import Pais from "./img/ecuador.png";
import Programador from "./img/programador.png";
import { Link } from "react-router-dom";

import {
  CardButton,
  CardMisCursos,
  CardSkills,
  CardTitulo,
  ContendorSobreME,
  ContendorUbiYPais,
  ContenedorFrase,
  ContenedorHeader,
  ContenedorLenguaje,
  ContenedorMenu,
  ContenedorMisCursos,
  ContenedorModos,
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
  HR,
  ContenedorCurriculum,
  ButtonCurriculum,
} from "./styles/Styles";

import { LenguajeBarra, LenguajeEn, LenguajeEs } from "./Lenguaje";
import { ModoDark, ModoLight } from "./Modos";

import Curriculum from "./../Files/CV-EN.pdf";

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
import { RutasApp } from "../Helpers/Rutas";

export const PageHome = () => {
  const dispach = useDispatch();
  const languages = localStorage.getItem("language");
  const theme = localStorage.getItem("theme");

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

      <HR theme={theme} />
      <ContenedorModos>
        <ContenedorLenguaje>
          <LenguajeEs />
          <LenguajeBarra />
          <LenguajeEn />
        </ContenedorLenguaje>

        <ContenedorThemes>
          {theme === "light" ? <ModoDark /> : <ModoLight />}
        </ContenedorThemes>
      </ContenedorModos>

      <ContendorSobreME>
        <YoImagen src={Yo} alt="yo" theme={theme} />
        <div style={{ margin: "auto" }}>
          {languages === "ES" ? (
            <Eslogan theme={theme}>{SPANISH.slogan} </Eslogan>
          ) : (
            <Eslogan theme={theme}>{ENGLISH.slogan} </Eslogan>
          )}
        </div>

        <ContendorUbiYPais>
          <Ecuador src={Ubicacion} alt="ubicacion" />

          <Ec theme={theme}> Ecuador</Ec>

          <Localitation src={Pais} alt="Ecuador" />
        </ContendorUbiYPais>
      </ContendorSobreME>
      <ContenedorCurriculum theme={theme}>
        <a href={Curriculum} target="_blank" rel="noreferrer" download>
          <ButtonCurriculum>
            Curriculum <i className="fa-solid fa-file-pdf"></i>{" "}
          </ButtonCurriculum>
        </a>
      </ContenedorCurriculum>
      <ContenedorFrase>
        <ProgramdorStyled src={Programador} alt="programador" />
        {languages === "ES" ? (
          <Frase theme={theme}>
            {SPANISH.frase}
            <Red theme={theme} as={Link} to={RutasApp.redes}>
              @theerudito
            </Red>
          </Frase>
        ) : (
          <Frase theme={theme}>
            {ENGLISH.frase}
            <Red theme={theme} as={Link} to={RutasApp.redes}>
              @theerudito
            </Red>
          </Frase>
        )}
      </ContenedorFrase>

      <ContenedorTituloSkills>
        {languages === "ES" ? (
          <TituloSkills theme={theme}>{SPANISH.skill} </TituloSkills>
        ) : (
          <TituloSkills theme={theme}>{ENGLISH.skill} </TituloSkills>
        )}
      </ContenedorTituloSkills>

      <ContenedorSkill theme={theme}>
        <ContenedorSkill1>
          {tecnology1.map((tec1) => (
            <CardSkills key={tec1.id}>
              <SkillsImg src={tec1.pic} alt="html" />
              <Titulos theme={theme}>{tec1.title} </Titulos>
            </CardSkills>
          ))}
        </ContenedorSkill1>
        <br />

        <ContenedorSkill2>
          {tecnology2.map((tec2) => (
            <CardSkills key={tec2.id}>
              <SkillsImg src={tec2.pic} alt="html" />
              <Titulos theme={theme}>{tec2.title} </Titulos>
            </CardSkills>
          ))}
        </ContenedorSkill2>
      </ContenedorSkill>

      {languages === "ES" ? (
        <MisCursosTitulo theme={theme}>{SPANISH.myCourses} </MisCursosTitulo>
      ) : (
        <MisCursosTitulo theme={theme}>{ENGLISH.myCourses} </MisCursosTitulo>
      )}

      <ContenedorMisCursos>
        {courses.map((item) => (
          <CardMisCursos className="curso" key={item.id} theme={theme}>
            <ImgMisCursos src={item.pic} alt="miscursos" />
            <CardTitulo>
              <CursosTitulo theme={theme}>{item.title} </CursosTitulo>
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
