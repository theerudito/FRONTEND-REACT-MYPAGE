import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { RutasApp } from "../Helpers/Rutas";
import { Link } from "react-router-dom";
import { ContenedorIconos, ContenedorMenu, Lista } from "./Styles/Iconos";
import { Icons } from "./Icons";

export const Navegacion = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ background: "#282c34" }}
      >
        <Navbar.Brand as={Link} to={RutasApp.home} style={{ margin: "0 5px", color: "black" }}>
          Home
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" style={{ margin: "0 5px" }}>
            
          <Lista>
            <Nav.Link
              as={Link}
              to={RutasApp.proyects}
              style={{ color: "black" }}
            >
              Hoja de Vida
            </Nav.Link>
          </Lista>

          <Lista>
            <Nav.Link
              as={Link}
              to={RutasApp.porfolio}
              style={{ color: "black" }}
            >
              Prorfolio
            </Nav.Link>
          </Lista>

          <Lista>
            <Nav.Link as={Link} to={RutasApp.login} style={{ color: "black" }}>
              Login
            </Nav.Link>
          </Lista>
          
          <ContenedorIconos>
            <Icons />
          </ContenedorIconos>
         
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </>
  );
};
