import styled from "styled-components";
import { Dispositivos } from "../../Medias/Medidas";

//==============================MENU==============================
export const ContenedorHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ContenedorMenu = styled.div`
  color: white;

  width: 100px;
`;

export const ContenedorModos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0px;
  width: 80px;
  margin-left: auto;
  margin-right: 15px;
`;

export const ContenedorThemes = styled.div`
  color: white;
`;

export const ImagenModos = styled.img`
  width: 20px;
  object-fit: cover;
  margin-left: 10px;
`;

export const ContenedorLenguaje = styled.div`
  margin: auto;
  margin-left: 10px;
`;
export const Lenguaje = styled.span`
  margin: auto;
  font-size: 14px;
`;

export const ContenedorIconos = styled.div`
  margin-left: auto;
  margin-right: 10px;
  margin-top: 20px;
  width: 200px;

  @media ${Dispositivos.tablet} {
    margin-left: 510px;
  }

  @media ${Dispositivos.laptop} {
    margin-left: 1000px;
  }
`;

export const Instagram = styled.i`
  color: white;
  margin: 0 5px;
  :hover {
    color: #405de6;
  }
`;

export const Facebook = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: #3b5998;
  }
`;

export const GitHub = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: #171515;
  }
`;

export const Whatssap = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: #00bb2d;
  }
`;

export const Linkedin = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: #0e76a8;
  }
`;

export const Gmail = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: red;
  }
`;

export const Twitter = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: aqua;
  }
`;

//==============================MENU==============================

//==============================YO================================
export const ContendorSobreME = styled.div`
  margin: auto;
  align-items: center;
  justify-content: center;
  display: grid;
`;

export const ContendorUbiYPais = styled.div`
  margin: auto;
  width: 160px;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const YoImagen = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  background-color: greenyellow;
  border-radius: 50%;
  border: solid 3px white;
  margin: 10px auto;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
    border: solid 3px black;
  }
`;

export const Ecuador = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
export const Localitation = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

export const Ec = styled.h4`
  width: 80px;
  height: 30px;
  object-fit: cover;
  margin: auto;
  margin-right: 10px;
`;
//==============================YO================================

//==============================RELOJ=============================
export const ContenedorReloj = styled.div`
  border: solid 1px white;
  border-radius: 10px;
  width: 100px;
  margin: auto;
  display: grid;
  align-items: center;
  justify-content: center;
`;
//==============================RELOJ=============================

//==============================FRASE=============================
export const ContenedorFrase = styled.div`
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
    font-size: 12px;
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 300px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
    font-size: 10px;
    width: 400px;
  }
  @media ${Dispositivos.mobileL} {
    max-width: 425px;
    width: 700px;
  }
  @media ${Dispositivos.tablet} {
    max-width: 768px;
  }
  @media ${Dispositivos.laptop} {
    max-width: 1024px;

    width: 1024px;
  }
  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
  }
  @media ${Dispositivos.desktop} {
    max-width: 2560px;
  }
`;

export const ProgramdorStyled = styled.img`
  @media ${Dispositivos.mobileM} {
    width: 60px;
    height: 60px;
  }

  @media ${Dispositivos.laptop} {
    width: 80px;
    height: 80px;
  }
`;

export const Frase = styled.h4`
  margin: auto;
  @media ${Dispositivos.mobileM} {
    font-size: 14px;
  }
  @media ${Dispositivos.laptop} {
    font-size: 18px;
  }
`;
export const Red = styled.span`
  color: aquamarine;
`;

//==============================FRASE=============================

//==============================SKILL=============================
export const ContenedorTituloSkills = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const TituloSkills = styled.h4`
  color: white;
  border-bottom: 2px solid;
`;

export const ContenedorSkill = styled.div`
  width: 1200px;
  :hover {
    background-color: #181a2b;
  }

  @media ${Dispositivos.mobileS} {
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 300px;
    border-radius: 10px;
  }

  @media ${Dispositivos.mobileM} {
    width: 267px;
    height: 265px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  @media ${Dispositivos.mobileL} {
    width: 345px;
    height: 345px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.tablet} {
    width: 425px;
    height: 425px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    height: 240px;
    width: 900px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  @media ${Dispositivos.laptopL} {
    max-width: 1440px;
    background-color: yellow;
  }

  @media ${Dispositivos.desktop} {
    max-width: 2560px;
    background-color: burlywood;
  }
`;

export const ContenedorSkill1 = styled.div`
  @media ${Dispositivos.mobileM} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
    height: 130px;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.mobileL} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
    height: 170px;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.tablet} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
    height: 210px;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.laptop} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    margin: auto;
    width: 900px;
    height: 100px;
    margin: auto;
    align-items: center;
    justify-content: center;
  }
`;

export const ContenedorSkill2 = styled(ContenedorSkill1)``;

export const SkillsImg = styled.img`
  margin: 5px auto;
  padding: 0px;
  align-content: center;

  @media ${Dispositivos.mobileM} {
    height: 30px;
    width: 30px;
  }

  @media ${Dispositivos.mobileL} {
    height: 30px;
    width: 30px;
  }

  @media ${Dispositivos.tablet} {
    height: 30px;
    width: 30px;
  }

  @media ${Dispositivos.laptop} {
    height: 48px;
    width: 48px;
  }
`;

export const CardSkills = styled.p`
  color: white;
  margin: auto;
  align-items: center;
  display: grid;
  justify-content: center;
  margin-left: 5px;
  border: solid 1px white;

  @media ${Dispositivos.mobileM} {
    width: 60px;
    height: 60px;
    font-size: 12px;
  }

  @media ${Dispositivos.mobileL} {
    width: 80px;
    height: 80px;
    font-size: 16px;
  }

  @media ${Dispositivos.tablet} {
    height: 100px;
    width: 100px;
  }

  @media ${Dispositivos.laptop} {
    height: 100px;
    width: 100px;
    font-size: 20px;
  }
`;

export const Titulos = styled.p`
  color: white;

  @media ${Dispositivos.mobileL} {
    font-size: 14px;
  }

  @media ${Dispositivos.laptop} {
    font-size: 18px;
  }
`;
//==============================SKILL=============================

//==========================MIS CURSOS============================

export const ContenedorMisCursos = styled.div`
  @media ${Dispositivos.mobileM} {
    .curso {
      width: 360px;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 10px auto;
    }
  }

  @media ${Dispositivos.mobileM} {
    .curso {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 10px auto;
    }
  }

  @media ${Dispositivos.mobileL} {
    .curso {
      width: 440px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 10px auto;
    }
  }

  @media ${Dispositivos.tablet} {
    .curso {
      display: grid;
      width: 500px;
      grid-template-columns: repeat(2, 1fr);
      margin: 10px auto;
    }
  }

  @media ${Dispositivos.laptop} {
    .curso {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 10px auto;
    }

    @media ${Dispositivos.laptop} {
      max-width: 1024px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: auto;
    }
  }
`;

export const MisCursosTitulo = styled(TituloSkills)`
  margin: 10px auto;
  width: 130px;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const CursosTitulo = styled.h4`
  margin: 10px auto;
  width: 130px;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const CardMisCursos = styled.div`
  background-color: #181a1b;
  border-radius: 5px;
  :hover {
    background-color: #181a2b;
  }

  @media ${Dispositivos.mobileM} {
    width: 350px;
    height: 180px;
  }

  @media ${Dispositivos.mobileL} {
    width: 440px;
    height: 200px;
    display: grid;
    margin: 5px auto;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Dispositivos.tablet} {
    width: 400px;
    height: 200px;
    display: grid;
    margin: 5px auto;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Dispositivos.laptop} {
    width: 500px;
    height: 250px;
    display: grid;
    margin: 5px auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ImgMisCursos = styled.img`
  border: 1px black;
  border-radius: 5px;
  object-fit: contain;

  @media ${Dispositivos.mobileM} {
    width: 150px;
    display: grid;
    margin: auto;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 25px;
  }

  @media ${Dispositivos.mobileL} {
    height: 150px;
    width: 250px;
    display: grid;
    margin: auto;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 10px;
  }
  @media ${Dispositivos.tablet} {
    width: 300px;
    height: 180px;
    display: grid;
    margin: 5px auto;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 15px;
    margin-top: 10px;
  }

  @media ${Dispositivos.laptop} {
    width: 360px;
    height: 200px;
    display: grid;
    margin: 10px auto;
    grid-template-columns: repeat(2, 1fr);
    margin-left: -10px;
    margin-top: 25px;
  }
`;

export const CardTitulo = styled.div`
  margin: auto;
  display: grid;
  margin: auto;
  align-items: center;
  justify-content: center;

  @media ${Dispositivos.mobileL} {
    margin-left: 15px;
  }

  @media ${Dispositivos.laptop} {
    margin-left: -20px;
  }
`;

export const CardButton = styled.button`
  background-color: greenyellow;
  border: none;
  text-decoration: none;
  border-radius: 10px;
  width: 140px;
  :hover {
    background-color: green;
    color: white;
  }
  @media ${Dispositivos.mobileL} {
    width: 140px;
  }
  @media ${Dispositivos.laptop} {
    width: 160px;
  }
`;

export const TituloCurso = styled(MisCursosTitulo)`
  color: white;
`;

export const Liks = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

//==========================MIS CURSOS============================

//=====================FORMULARIO=================================
export const ContenedorFormularioPrincipal = styled.div`
  margin: 10px auto;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 350px;
  border-radius: 10px;
  border: 1px solid white;
  margin-bottom: 20px;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
`;

export const ContenedorBoton = styled.button`
  background-color: greenyellow;
  width: 100px;
  height: 30px;
  margin: 10px auto;
  display: grid;
  margin-bottom: 5px;
  border: none;
  border-radius: 10px;
  color: black;
  align-items: center;
  justify-content: center;
  padding: auto;
  :hover {
    background-color: orange;
    color: black;
  }
`;

export const AlertaFormulario = styled.div`
  background-color: orangered;
  color: white;
  display: flex;
  margin: auto;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: solid 1px white;
  font-size: 18px;
`;
//=====================FORMULARIO=================================
