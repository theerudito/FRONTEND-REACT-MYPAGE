import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Complementos/Layout/Layout';
import { Router } from './Complementos/Router/Router';
// Importar Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';


const Contenedor = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  color: "red";
  background-color: #282c34;
  color: aliceblue;
  font-size: calc(10px + 2vmin);
  clear: both;
  overflow: hidden;
`

function App() {
  return (
        <Contenedor>
              <BrowserRouter>
                <Layout>
                    <Router/>
                </Layout>
              </BrowserRouter>
      </Contenedor>
  );
}

export default App;
