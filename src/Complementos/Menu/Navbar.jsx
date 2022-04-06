import React from "react";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink to="/" id="inicio">
            EruditoDev
          </NavLink>

          <button
            id="togel"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="https://drive.google.com/file/d/1pvTpWKhotcWqk-ko0XzmgV9W2HvcGtA4/view"
                  target="_blanck"
                  id="link"
                >
                  Curriculum
                </a>
              </li>

              <li className="nav-item">
                <NavLink to="#contacto" id="link">
                  Contacto
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/porfolio" id="link">
                  Portfolio
                </NavLink>
              </li>
            </ul>

            <div id="iconost" className="iconost">
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

            {/*
       <form className="d-flex">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-outline-primary" type="submit">Suscribete</button>
       </form>
       */}
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};
