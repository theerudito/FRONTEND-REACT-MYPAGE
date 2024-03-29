import React from "react";
import { Route, Routes } from "react-router-dom";
import { AccountPage } from "../Account/AccountPage";
import { RutasApp } from "../Helpers/Rutas";
import { PageHome } from "../Home/PageHome";
import { MostrarContactoApp } from "../MostarContactos/MostrarContacto";
import { Page404App } from "../Page404/Page404";
import { PagePorfolio } from "../Porfolio/PagePorfolio";
import { RedesApp } from "../Redes/RedesApp";
import { Blog } from "../Blog/Blog";
import { Policy } from "../Policy/Policy";
import { UserPolicy } from "../Policy/UserPolicy";
import { DeleteAccount } from "../Aps/DeleteAccount";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={RutasApp.home} element={<PageHome />} />
        <Route path={RutasApp.account} element={<AccountPage />} />
        <Route path={RutasApp.portfolio} element={<PagePorfolio />} />
        <Route path={RutasApp.contact} element={<MostrarContactoApp />} />
        <Route path={RutasApp.blog} element={<Blog />} />
        <Route path={RutasApp.redes} element={<RedesApp />} />
        <Route path={RutasApp.privacyPolicy} element={<Policy />} />
        <Route path={RutasApp.policyUser} element={<UserPolicy />} />
        <Route path={RutasApp.deleteAccount} element={<DeleteAccount />} />
        <Route path="*" element={<Page404App />} />
      </Routes>
    </>
  );
};
