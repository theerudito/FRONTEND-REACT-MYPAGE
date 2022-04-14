import React from "react";
import { Route, Routes } from "react-router-dom";
import { RutasApp } from "../Helpers/Rutas";
import { Account } from "../Pages/Account/Account";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { MostrarContactoApp } from "../Pages/MostarContactos/MostrarContacto";
import { Page404App } from "../Pages/Page404/Page404";
import { PorfolioPage } from "../Pages/Porfolio/PorfolioPage";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={RutasApp.home} element={<Home />} />
        <Route path={RutasApp.login} element={<Login />} />
        <Route path={RutasApp.account} element={<Account />} />
        <Route path={RutasApp.porfolio} element={<PorfolioPage />} />
        <Route path={RutasApp.contact} element={<MostrarContactoApp />} />
        <Route path="*" element={<Page404App />} />
      </Routes>
    </>
  );
};
