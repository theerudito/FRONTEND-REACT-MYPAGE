import React from "react";
import styled from "styled-components";
import { BurgerMenu } from "./Burger";
import LogoPage from "../Home/img/programador.png";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
`;

const ContenedorLogo = styled.div`
  margin-top: 5px;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 100px;
  margin-top: 10px;
`;

export const NavBarMenu = () => {
  return (
    <Nav>
      <ContenedorLogo>
        <LogoImg src={LogoPage} alt="logo" />
      </ContenedorLogo>
      <BurgerMenu />
    </Nav>
  );
};
