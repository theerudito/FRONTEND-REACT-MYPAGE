import React from "react";
import { useDispatch } from "react-redux";
import { setEnglish, setSpanish } from "../../store/slices/edudito/erudito";
import { useSelector } from "react-redux";
import { Lenguaje } from "./styles/Styles";

export const LenguajeEn = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.erudito);
  const LanguajeEN = () => {
    localStorage.setItem("language", "EN");
    const language = localStorage.getItem("language");
    dispatch(setEnglish(language));
  };
  return (
    <Lenguaje onClick={() => LanguajeEN()} theme={theme}>
      EN
    </Lenguaje>
  );
};

export const LenguajeEs = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.erudito);
  const LanguajeES = () => {
    localStorage.setItem("language", "ES");
    const language = localStorage.getItem("language");
    dispatch(setSpanish(language));
  };

  return (
    <Lenguaje onClick={() => LanguajeES()} theme={theme}>
      ES
    </Lenguaje>
  );
};

export const LenguajeBarra = () => {
  const { theme } = useSelector((state) => state.erudito);
  return <Lenguaje theme={theme}>|</Lenguaje>;
};
