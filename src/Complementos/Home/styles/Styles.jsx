import styled from "styled-components";
import { Dispositivos } from "../../Medias/Medidas";
import { ThemeDark, ThemeLight } from "../../Themes/Theme";

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
  user-select: none;
`;

export const ContenedorThemes = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const ImagenModos = styled.img`
  width: 20px;
  object-fit: cover;
  margin-left: 10px;
  user-select: none;
`;

export const ContenedorLenguaje = styled.div`
  margin: auto;
  margin-left: 10px;
  user-select: none;
`;
export const Lenguaje = styled.span`
  margin: auto;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
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
  @media ${Dispositivos.laptopL} {
    margin-left: 1000px;
  }
  @media ${Dispositivos.desktop} {
    margin-left: 1000px;
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
  display: flex;
`;

export const YoImagen = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin: 10px auto;
  :hover {
    box-shadow: ${(props) =>
      props.theme === "light" ? ThemeLight.yoBox : ThemeDark.yoBox};
    border: ${(props) =>
      props.theme === "light" ? ThemeLight.yo : ThemeDark.yo};
  }
`;

//0px 0px 20px 5px rgba(224, 219, 219, 0.15);

export const Eslogan = styled.p`
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.slogan : ThemeDark.slogan};
  font-weight: bold;
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
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.slogan : ThemeDark.slogan};
`;
//==============================YO================================

//==============================RELOJ=============================
export const ContenedorReloj = styled.div`
  border: ${(props) =>
    props.theme === "light" ? ThemeLight.borderReloj : ThemeDark.borderReloj};
  border-radius: 10px;
  width: 100px;
  margin: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
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
  @media ${Dispositivos.mobileS} {
    width: 60px;
    height: 60px;
  }
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
  margin-top: 10px;
  border-radius: 10px;
  border: solid 1px silver;
  padding: 10px;
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
  color: @media ${Dispositivos.mobileM} {
    font-size: 14px;
  }

  @media ${Dispositivos.mobileM} {
    font-size: 14px;
  }
  @media ${Dispositivos.mobileL} {
    font-size: 14px;
  }

  @media ${Dispositivos.tablet} {
    font-size: 16px;
  }
  @media ${Dispositivos.laptop} {
    font-size: 18px;
  }
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

export const Red = styled.span`
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.slogan : ThemeDark.slogan};
`;

export const TituloSkills = styled.h4`
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.slogan : ThemeDark.slogan};
  border-bottom: 2px solid;
`;

export const ContenedorSkill = styled.div`
  width: 1200px;
  background-color: ${(props) =>
    props.theme === "light"
      ? ThemeLight.contenedorSkill
      : ThemeDark.contenedorSkill};
  :hover {
    background-color: ${(props) =>
      props.theme === "dark"
        ? ThemeDark.contenedorSkillHover
        : ThemeLight.contenedorSkillHover};
  }

  @media ${Dispositivos.mobileS} {
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    height: 240px;
    width: 900px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  @media ${Dispositivos.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    height: 240px;
    width: 900px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
`;

export const ContenedorSkill1 = styled.div`
  @media ${Dispositivos.mobileS} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
    height: 130px;
    align-items: center;
    justify-content: center;
  }

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
  @media ${Dispositivos.laptopL} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    margin: auto;
    width: 900px;
    height: 100px;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.desktop} {
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

  @media ${Dispositivos.mobileS} {
    height: 30px;
    width: 30px;
  }

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

  @media ${Dispositivos.laptopL} {
    height: 48px;
    width: 48px;
  }

  @media ${Dispositivos.desktop} {
    height: 48px;
    width: 48px;
  }
`;

export const CardSkills = styled.div`
  color: white;
  margin: auto;
  align-items: center;
  display: grid;
  justify-content: center;
  margin-left: 5px;
  border: solid 1px white;

  @media ${Dispositivos.mobileS} {
    width: 60px;
    height: 60px;
    font-size: 12px;
  }

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
  @media ${Dispositivos.laptopL} {
    height: 100px;
    width: 100px;
    font-size: 20px;
  }
  @media ${Dispositivos.desktop} {
    height: 100px;
    width: 100px;
    font-size: 20px;
  }
`;

export const Titulos = styled.p`
  color: white;

  color: @media ${Dispositivos.mobileL} {
    font-size: 14px;
    font-weight: bold;
  }

  @media ${Dispositivos.laptop} {
    font-size: 18px;
  }
`;
//==============================SKILL=============================

//==========================MIS CURSOS============================

export const ContenedorMisCursos = styled.div`
  @media ${Dispositivos.mobileS} {
    display: grid;
    grid-template-columns: repeat(1, 4fr);
    margin: auto;
  }
  @media ${Dispositivos.mobileM} {
    display: grid;
    grid-template-columns: repeat(1, 4fr);
    margin: auto;
  }

  @media ${Dispositivos.mobileM} {
    display: grid;
    grid-template-columns: repeat(1, 4fr);
    margin: auto;
  }

  @media ${Dispositivos.mobileL} {
    display: grid;
    grid-template-columns: repeat(1, 4fr);
    margin: auto;
  }

  @media ${Dispositivos.tablet} {
    max-width: 740px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media ${Dispositivos.laptopL} {
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
  }
  @media ${Dispositivos.desktop} {
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    align-items: center;
    justify-content: center;
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
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
  margin: 10px auto;
  width: 130px;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const CardMisCursos = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? ThemeLight.cardCursos : ThemeDark.cardCursos};
  border-radius: 5px;
  :hover {
    background-color: ${(props) =>
      props.theme === "light"
        ? ThemeLight.cardCursosHover
        : ThemeDark.cardCursosHover};
    box-shadow: 0px 0px 5px aqua;
  }
  @media ${Dispositivos.mobileS} {
    width: 300px;
    height: 150px;
    display: grid;
    margin: 5px auto;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Dispositivos.mobileM} {
    width: 380px;
    height: 200px;
    display: grid;
    margin: 5px auto;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Dispositivos.mobileL} {
    width: 440px;
    height: 200px;
    display: grid;
    margin: 5px auto;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Dispositivos.tablet} {
    width: 360px;
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
  @media ${Dispositivos.laptopL} {
    width: 500px;
    height: 250px;
    display: grid;
    margin: 5px auto;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${Dispositivos.desktop} {
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

  @media ${Dispositivos.mobileS} {
    width: 130px;
    display: grid;
    margin: auto;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 25px;
  }

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
    width: 180px;
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
  @media ${Dispositivos.laptopL} {
    width: 360px;
    height: 200px;
    display: grid;
    margin: 10px auto;
    grid-template-columns: repeat(2, 1fr);
    margin-left: -10px;
    margin-top: 25px;
  }
  @media ${Dispositivos.desktop} {
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
  @media ${Dispositivos.mobileS} {
    background-color: greenyellow;
    border: none;
    text-decoration: none;
    border-radius: 10px;
    width: 120px;
    :hover {
      background-color: #00b708;
      color: black;
    }
  }
  @media ${Dispositivos.mobileM} {
    background-color: greenyellow;
    border: none;
    text-decoration: none;
    border-radius: 10px;
    width: 140px;
    :hover {
      background-color: #00b708;
      color: black;
    }
  }
  @media ${Dispositivos.mobileL} {
    background-color: greenyellow;
    border: none;
    text-decoration: none;
    border-radius: 10px;
    width: 140px;
    :hover {
      background-color: #00b708;
      color: black;
    }
  }
  @media ${Dispositivos.tablet} {
    background-color: greenyellow;
    border: none;
    text-decoration: none;
    border-radius: 10px;
    width: 140px;
    font-size: 1.2rem;
    :hover {
      background-color: #00b708;
      color: black;
    }
  }
  @media ${Dispositivos.laptop} {
    background-color: greenyellow;
    border: none;
    text-decoration: none;
    border-radius: 10px;
    width: 140px;
    font-size: 1.2rem;
    :hover {
      background-color: #00b708;
      color: black;
    }
  }
  @media ${Dispositivos.laptopL} {
    background-color: greenyellow;
    border: none;
    text-decoration: none;
    border-radius: 10px;
    width: 140px;
    font-size: 1.2rem;
    :hover {
      background-color: #00b708;
      color: black;
    }
  }
  @media ${Dispositivos.desktop} {
    background-color: greenyellow;
    border: none;
    text-decoration: none;
    border-radius: 10px;
    width: 140px;
    font-size: 1.2rem;
    :hover {
      background-color: #00b708;
      color: black;
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
  background: ${(props) =>
    props.theme === "light" ? ThemeLight.formulario : ThemeDark.formulario};
  margin: 10px auto;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 300px;
  min-height: 350px;
  max-height: 450px;
  border-radius: 10px;
  border: 1px solid white;
  margin-bottom: 20px;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
`;

export const Formulario = styled.form`
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
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
    background-color: #00b708;
    color: white;
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

  font-size: 18px;
`;
//=====================FORMULARIO=================================

export const HR = styled.hr`
  color: ${(props) => (props.theme === "light" ? ThemeLight.hr : ThemeDark.hr)};
`;
