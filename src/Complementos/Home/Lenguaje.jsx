import React from "react";
import { useDispatch } from "react-redux";
import { setSpanish } from "../../store/slices/edudito/erudito";

import { Lenguaje } from "./styles/Styles";

export const LenguajeEs = () => {
  const dispatch = useDispatch();

  const LanguajeES = () => {
    dispatch(setSpanish(false));
  };

  return <Lenguaje onClick={LanguajeES}>ES</Lenguaje>;
};

export const LenguajeEn = () => {
  const dispatch = useDispatch();
  const LanguajeEN = () => {
    dispatch(setSpanish(true));
  };
  return <Lenguaje onClick={() => LanguajeEN()}>EN</Lenguaje>;
};

export const LenguajeBarra = () => {
  return <Lenguaje>|</Lenguaje>;
};
