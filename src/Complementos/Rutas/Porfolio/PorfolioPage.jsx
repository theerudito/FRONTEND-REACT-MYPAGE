import React from "react";
import { FooterApp } from "../../Footer/FooterApp";
import { HeaderPrincipal } from "../../Header/Header";
import { Navbar } from "../../Menu/Navbar";
import "../Porfolio/style.css";
import { MainPorfolio } from "./Main";

export const PorfolioPage = () => {
  return (
    <div className="contenedor">
      <HeaderPrincipal />
      <Navbar />
      <MainPorfolio />
      <FooterApp />
    </div>
  );
};
