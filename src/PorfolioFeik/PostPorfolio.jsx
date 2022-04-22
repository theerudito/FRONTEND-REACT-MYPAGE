import {
  ContenedorCard,
  ContenedorCardCuerpo,
  ContenedorMainCard,
  ContenedorCardTitulo,
  ContenedorBody,
  ContenedorImagen,
  ContenedorBoton,
  Logo,
} from "./Styles/styles";

export const MainCardPost = (datos) => {
  return (
    <>
      <ContenedorMainCard className="mainporfolio">
        <ContenedorCard className="container" id="card">
          <ContenedorCardCuerpo id="cuerpo">
            <ContenedorCardTitulo id="titulop">
              <h4 id="letras">{datos.titulo}</h4>
              <a href={datos.url} target="blank">
                <Logo className="bi bi-github text-light" id="ico"></Logo>
              </a>
            </ContenedorCardTitulo>
            <ContenedorBody>
              <ContenedorImagen src={datos.image} alt="img"></ContenedorImagen>
              <ContenedorBoton>
                <a
                  href={datos.page}
                  className="btn btn-lg btn-light"
                  target="_blanck"
                  id="boton"
                >
                  Ir al Sitio
                </a>
              </ContenedorBoton>
            </ContenedorBody>
          </ContenedorCardCuerpo>
        </ContenedorCard>
      </ContenedorMainCard>
    </>
  );
};
