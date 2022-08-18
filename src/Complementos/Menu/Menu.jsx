import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { RutasApp } from "../Helpers/Rutas";
import { useModalMenu } from "../Hooks/ModalMenu";
import { Modal } from "../MostarContactos/Modal";
import { FormularioLogin } from "../MostarContactos/Formulario";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLogin } from "../../store/slices/edudito/erudito";
import { ENGLISH } from "../Languages/EN";
import { SPANISH } from "../Languages/ES";
import { ThemeDark, ThemeLight } from "../Themes/Theme";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 20px;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-decoration: none;
  padding: 27px;
  color: white;
  margin-left: 110px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) =>
      props.themes === "light" ? ThemeLight.barraMenu : ThemeDark.barraMenu};
    position: fixed;
    color: ${(props) =>
      props.theme === "light" ? ThemeLight.menuColor : ThemeDark.menuColor};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    body {
      overflow: hidden;
    }
  }
`;

const LI = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  margin: auto 10px;
  list-style: none;
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
  color: ${(props) =>
    props.theme === null ? ThemeLight.menuColor : ThemeDark.menuColor};
  color: ${(props) =>
    props.theme === "dark" ? ThemeLight.menuColor : ThemeDark.menuColor};

  :hover {
    background-color: ${(props) =>
      props.theme === "dark" ? ThemeLight.menuBG : ThemeDark.menuBG};
    :hover {
      color: black;
    }

    border-radius: 10px;
  }
  @media (max-width: 768px) {
    margin: auto;
    :hover {
      background-color: ${(props) =>
        props.theme === "light" ? ThemeLight.menuBG : ThemeDark.menuBG};
      color: ${(props) =>
        props.theme === "dark" ? ThemeLight.menuColor : ThemeDark.menuColor};
      border-radius: 10px;

      width: 200px;
      height: 40px;
      margin: auto;
    }
  }
`;

export const MenuBurger = ({ open }) => {
  const [isOpenModalM, openModalM, closeModalM] = useModalMenu(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let handleLogin = JSON.parse(localStorage.getItem("accessToken"));
  const languages = localStorage.getItem("language");
  const themes = localStorage.getItem("theme");
  const { login, theme } = useSelector((store) => store.erudito);
  console.log(theme);
  const handleModalClick = (e) => {
    openModalM();
  };

  useEffect(() => {
    if (handleLogin) {
      dispatch(setLogin(true));
    } else {
      dispatch(setLogin(false));
    }
  }, [dispatch, handleLogin]);

  const handleAccount = () => {
    navigate(RutasApp.account);
  };

  return (
    <>
      <Ul open={open} tema={themes} theme={theme}>
        {languages === "ES" ? (
          <LI as={Link} to={RutasApp.home} tema={themes} theme={theme}>
            {SPANISH.menu.home}
          </LI>
        ) : (
          <LI as={Link} to={RutasApp.home} theme={themes}>
            {ENGLISH.menu.home}
          </LI>
        )}

        {languages === "ES" ? (
          <LI as={Link} to={RutasApp.curriculum} theme={themes}>
            {SPANISH.menu.cv}
          </LI>
        ) : (
          <LI as={Link} to={RutasApp.curriculum} theme={themes}>
            {ENGLISH.menu.cv}
          </LI>
        )}

        {languages === "ES" ? (
          <LI as={Link} to={RutasApp.portfolio} theme={themes}>
            {SPANISH.menu.portafolio}
          </LI>
        ) : (
          <LI as={Link} to={RutasApp.portfolio} theme={themes}>
            {ENGLISH.menu.portafolio}
          </LI>
        )}

        {/* <LI as={Link} to={RutasApp.home}>
          Blog
        </LI> */}

        {login ? (
          <LI onClick={() => handleAccount()} theme={themes}>
            {languages === "ES" ? SPANISH.menu.account : ENGLISH.menu.account}
          </LI>
        ) : (
          <LI onClick={handleModalClick} theme={themes}>
            {languages === "ES" ? SPANISH.menu.login : ENGLISH.menu.login}
          </LI>
        )}
      </Ul>
      <Modal isOpen={isOpenModalM} closeModal={closeModalM}>
        <FormularioLogin />
      </Modal>
    </>
  );
};
