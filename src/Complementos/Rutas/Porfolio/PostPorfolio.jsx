export const MainCardPost = (datos) => {
  return (
    <>
      <div className="mainporfolio">
        <div className="container" id="card">
          <div id="cuerpo">
            <div id="titulop">
              <h4 id="letras">{datos.titulo}</h4>
              <a href={datos.url} target="blank">
                <i className="bi bi-github text-light" id="ico"></i>
              </a>
            </div>
            <div id="card-body">
              <img src={datos.image} id="imge" alt="img"></img>
              <a
                href={datos.page}
                className="btn btn-lg btn-light"
                target="_blanck"
                id="boton"
              >
                Ir al Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
