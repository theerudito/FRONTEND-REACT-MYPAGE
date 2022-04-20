import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Complementos/Layout/Layout';
import { Router } from './Complementos/Router/Router';
// Importar Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';


const Contenedor = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-color: #050505;
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
