import React from "react";
import deleteImage from "./delete.jpg";

export const DeleteAccount = () => {
  var idioma = navigator.language || navigator.userLanguage;
  return (
    <div>
      <p
        style={{
          margin: "10px auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {idioma === "en-US"
          ? "Press Button to Delete ACCOUNT"
          : "Preciona el Boton Delete ACCOUNT"}
      </p>

      <img
        src={deleteImage}
        alt="img"
        style={{
          margin: "10px auto",
          alignItems: "center",
          display: "flex",
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
};
