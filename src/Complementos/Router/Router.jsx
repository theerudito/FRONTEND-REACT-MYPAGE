import React from "react";
import { Route, Routes } from "react-router-dom";
import { RutasApp } from "../Helpers/Rutas";
import { Curriculum } from "../Curriculum/Curriculum";
import { Account } from "../Pages/Account/Account";
import { Home } from "../Pages/Home/Home";
import { MostrarContactoApp } from "../Pages/MostarContactos/MostrarContacto";
import { Page404App } from "../Pages/Page404/Page404";
import { PorfolioPage } from "../Pages/Porfolio/PorfolioPage";
import { PageHome } from "../New/Home/PageHome";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={RutasApp.home} element={<PageHome />} />
        <Route path={RutasApp.account} element={<Account />} />
        <Route path={RutasApp.porfolio} element={<PorfolioPage />} />
        <Route path={RutasApp.contact} element={<MostrarContactoApp />} />
        <Route path={RutasApp.curriculum} element={<Curriculum />} />
        <Route path="*" element={<Page404App />} />
      </Routes>
    </>
  );
};
