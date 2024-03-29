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
  const [isOpenModal, openModal, closeModal] = useModalContactApp(false);

  const LoginModal = () => {
    openModal();
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ background: "#282c34", width: "100%" }}
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
            <Nav.Link as={Link} to={RutasApp.blog} className="nav">
              sd
            </Nav.Link>
          </Lista>

          <Lista>
            <Nav.Link as={Link} to={RutasApp.portfolio} className="nav">
              Prorfolio
            </Nav.Link>
          </Lista>

          <Lista>
            <Nav.Link className="nav" onClick={() => LoginModal()}>
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
