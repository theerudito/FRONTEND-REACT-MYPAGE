import React from "react";
import { Navegacion } from "../Navigation/Navegacion";
import { FooterApp } from "../Pages/Home/Footer/FooterApp";


import { HeaderPrincipal } from "../Pages/Home/Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderPrincipal />
      <Navegacion/>
      {children}
      <FooterApp/>
    </>
  );
};
