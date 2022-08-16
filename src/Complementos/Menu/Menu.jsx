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

const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 20px;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-decoration: none;
  padding: 27px;
  margin-left: 70px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #181a2b;
    position: fixed;
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
  text-decoration: none;
  color: white;
  :hover {
    background-color: greenyellow;
    border-radius: 10px;
    color: black;
  }
  @media (max-width: 768px) {
    :hover {
      background-color: greenyellow;
      border-radius: 10px;
      color: black;
      width: 200px;
      height: 40px;
      margin: auto;
    }
  }
`;

const ButtonLogin = styled.button`
 border: none;
 background-color: #050505;
 color: white;
 :hover {
  background-color: greenyellow;
  border-radius: 10px;
  color: black;
  @media (max-width: 768px) {
    width: 200px;
 
 color: white;
    :hover {
      background-color: greenyellow;
      border-radius: 10px;
      color: black;
      width: 200px;
      
    }
  }
`;

export const MenuBurger = ({ open }) => {
  const [isOpenModalM, openModalM, closeModalM] = useModalMenu(false);
  const navigate = useNavigate();
  const { login, languages } = useSelector((store) => store.erudito);
  const dispatch = useDispatch();
  let handleLogin = JSON.parse(localStorage.getItem("accessToken"));

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
      <Ul open={open}>
        {languages ? (
          <LI as={Link} to={RutasApp.home}>
            {ENGLISH.menu.home}
          </LI>
        ) : (
          <LI as={Link} to={RutasApp.home}>
            {SPANISH.menu.home}
          </LI>
        )}

        {languages ? (
          <LI as={Link} to={RutasApp.curriculum}>
            {ENGLISH.menu.cv}
          </LI>
        ) : (
          <LI as={Link} to={RutasApp.curriculum}>
            {SPANISH.menu.cv}
          </LI>
        )}

        {languages ? (
          <LI as={Link} to={RutasApp.portfolio}>
            {ENGLISH.menu.portafolio}
          </LI>
        ) : (
          <LI as={Link} to={RutasApp.portfolio}>
            {SPANISH.menu.portafolio}
          </LI>
        )}

        {/* <LI as={Link} to={RutasApp.home}>
          Blog
        </LI> */}
        {login ? (
          <ButtonLogin onClick={() => handleAccount()}>
            {languages ? ENGLISH.menu.account : SPANISH.menu.account}{" "}
          </ButtonLogin>
        ) : (
          <ButtonLogin onClick={handleModalClick}>
            {languages ? ENGLISH.menu.login : SPANISH.menu.login}{" "}
          </ButtonLogin>
        )}
      </Ul>
      <Modal isOpen={isOpenModalM} closeModal={closeModalM}>
        <FormularioLogin />
      </Modal>
    </>
  );
};
