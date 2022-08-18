import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Complementos/Layout/Layout";
import { Router } from "./Complementos/Router/Router";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { ThemeDark, ThemeLight } from "./Complementos/Themes/Theme";
import { useEffect } from "react";

function App() {
  const { themeState } = useSelector((store) => store.erudito);
  const theme = localStorage.getItem("theme");

  useEffect(() => {
    if (themeState === null) {
      localStorage.setItem("theme", themeState);
    }
  }, [themeState]);
  
  return (
    <Contenedor theme={theme}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Contenedor>
  );
}

export default App;

const Contenedor = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? ThemeLight.fondo : ThemeDark.fondo};
  width: 100%;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  color: aliceblue;
  font-size: calc(10px + 2vmin);
  clear: both;
  overflow: hidden;
`;
