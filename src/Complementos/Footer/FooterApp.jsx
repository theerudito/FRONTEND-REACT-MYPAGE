import React from "react";

export const FooterApp = () => {
  return (
    <>
      <hr />
      <footer className="w-100  d-flex  align-items-center justify-content-center flex-wrap">
        <div>
          <p id="derechos_1">Erudito Dev &copy; </p>
          <p id="derechos_2">Todos Los Derechos Reservados 2022</p>
        </div>

        <div className="iconos">
          <a id="gm" href="mailto:erudito.tv@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
          <a
            id="fb"
            href="https://www.facebook.com/theerudito1/"
            target="blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a id="tw" href="https://twitter.com/theerudito" target="blank">
            <i className="bi bi-twitter"></i>
          </a>
          <a
            id="ws"
            href="https://wa.me/593960806054"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi-whatsapp"></i>
          </a>
          <a
            id="in"
            href="https://www.instagram.com/theerudito/"
            target="blank"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            id="lk"
            href="https://www.linkedin.com/in/theerudito"
            target="blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a id="gh" href="https://github.com/theerudito" target="blank">
            <i className="bi bi-github"></i>
          </a>
        </div>

        <br />
        <br />
      </footer>
    </>
  );
};
