import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { RutasApp } from "../Helpers/Rutas";
import { Link } from "react-router-dom";
import { ContenedorIconos, Lista } from "./Styles/Iconos";
import { Icons } from "./Icons";
import { useModalContactApp } from "../Hooks/useModalContact";
import { FormularioLogin } from "../Pages/MostarContactos/Formulario";
import { Modal } from "../Pages/MostarContactos/Modal";

export const Navegacion = () => {
  const [isOpenModal, openModal, closeModal] = useModalContactApp(true);

  const LoginModal = () => {
    openModal();
    
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ background: "#282c34" }}
      >
        <Navbar.Brand
          as={Link}
          to={RutasApp.home}
          style={{ margin: "0 5px", color: "white" }}
        >
          Home
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ marginRight: "10px" }}
        />

        <Navbar.Collapse id="responsive-navbar-nav" style={{ margin: "0 5px" }}>
          <Lista>
            <Nav.Link
              as={Link}
              to={RutasApp.curriculum}
              style={{ color: "black", listStyle: "none" }}
            >
              Curriculum
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
            <Nav.Link style={{ color: "black" }} onClick={() => LoginModal()}>
              Login
            </Nav.Link>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <FormularioLogin />
            </Modal>
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
