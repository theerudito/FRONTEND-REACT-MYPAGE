import React from "react";

import { FooterApp } from "../Pages/Home/Footer/FooterApp";



export const Layout = ({ children }) => {
  return (
    <>
      {children}
      <FooterApp />
    </>
  );
};
