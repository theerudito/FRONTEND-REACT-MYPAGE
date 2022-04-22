import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RutasApp } from "../Helpers/Rutas";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 250px;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-decoration: none;
  padding: 20px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #181a2b;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 320px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
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

export const MenuBurger = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <LI as={Link} to={RutasApp.home}>
          Home
        </LI>
        <LI as={Link} to={RutasApp.curriculum}>
          Curriculum
        </LI>
        <LI as={Link} to={RutasApp.portfolio}>
          Portfolio
        </LI>
        <LI as={Link} to={RutasApp.home}>
          Blog
        </LI>
        <LI as={Link} to={RutasApp.home}>
          Login
        </LI>
      </Ul>
    </>
  );
};
