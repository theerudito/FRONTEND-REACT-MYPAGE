import React from "react";
import { Navegacion } from "../Navigation/Navegacion";


import { HeaderPrincipal } from "../Pages/Home/Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderPrincipal />
      <Navegacion/>
      {children}
    </>
  );
};
