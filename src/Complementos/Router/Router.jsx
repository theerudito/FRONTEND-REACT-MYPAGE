import React from "react";
import { Route, Routes } from "react-router-dom";
import { AccountPage } from "../Account/AccountPage";
import { Curriculum } from "../Curriculum/Curriculum";
import { RutasApp } from "../Helpers/Rutas";
import { PageHome } from "../Home/PageHome";
import { MostrarContactoApp } from "../MostarContactos/MostrarContacto";
import { Page404App } from "../Page404/Page404";
import { Carousel } from "../Porfolio/Carousel";
import { PagePorfolio } from "../Porfolio/PagePorfolio";
import { RedesApp } from "../Redes/RedesApp";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={RutasApp.home} element={<PageHome />} />
        <Route path={RutasApp.account} element={<AccountPage />} />
        <Route path={RutasApp.portfolio} element={<PagePorfolio />} />
        <Route path={RutasApp.contact} element={<MostrarContactoApp />} />
        <Route path={RutasApp.curriculum} element={<Curriculum />} />
        <Route path={RutasApp.redes} element={<RedesApp />} />
        <Route path={RutasApp.carousel} element={<Carousel />} />
        <Route path="*" element={<Page404App />} />
      </Routes>
    </>
  );
};
