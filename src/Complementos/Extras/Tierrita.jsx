import React from "react";
import Typewriter from "typewriter-effect";

export const Tierrita = () => {
  return (
    <div className="RedesSociales">
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .pauseFor(1000)
            .typeString("Bienvenidos a la Tierrita")
            .pauseFor(1000)
            .deleteAll(30)
            .start();
        }}
      />
    </div>
  );
};
