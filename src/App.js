import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Complementos/Layout/Layout";
import { Router } from "./Complementos/Router/Router";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { ThemeLight } from "./Complementos/Themes/Theme";

function App() {
  const { theme } = useSelector((store) => store.erudito);
  console.log(theme);
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
    props.theme === "light" ? ThemeLight.fondo : ThemeLight.color};
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


