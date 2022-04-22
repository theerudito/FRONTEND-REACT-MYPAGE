import React from "react";
import { RedesSocualesApp } from "./RedesSociales";

export const HeaderPrincipal = () => {
  return (
    <>
      <header
        className="container-fluid d-flex justify-content-center"
        id="titulo"
      >
        <h2 id="redessociales">
          <RedesSocualesApp />
        </h2>
      </header>
    </>
  );
};
