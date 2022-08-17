import React from "react";
import { useDispatch } from "react-redux";
import { setEnglish, setSpanish } from "../../store/slices/edudito/erudito";

import { Lenguaje } from "./styles/Styles";

export const LenguajeEn = () => {
  const dispatch = useDispatch();

  const LanguajeEN = () => {
    localStorage.setItem("language", "EN");
    const language = localStorage.getItem("language");
    dispatch(setEnglish(language));
  };
  return <Lenguaje onClick={() => LanguajeEN()}>EN</Lenguaje>;
};

export const LenguajeEs = () => {
  const dispatch = useDispatch();
  const LanguajeES = () => {
    localStorage.setItem("language", "ES");
    const language = localStorage.getItem("language");
    dispatch(setSpanish(language));
  };

  return <Lenguaje onClick={LanguajeES}>ES</Lenguaje>;
};

export const LenguajeBarra = () => {
  return <Lenguaje>|</Lenguaje>;
};
