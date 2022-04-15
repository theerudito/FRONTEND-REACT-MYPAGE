import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Complementos/Layout/Layout';
import { Router } from './Complementos/Router/Router';
// Importar Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { DivContenedorHome } from './Complementos/Pages/Home/StyleHome';

function App() {
  return (
        <div style={{
          width: "100%", 
          height: "auto", 
          margin: "0px", 
          padding: "0px", 
          boxSizing: "border-box",
          color: "red",
          
          }} >
          <DivContenedorHome>
              <BrowserRouter>
                <Layout>
                    <Router/>
                </Layout>
              </BrowserRouter>
          </DivContenedorHome>
      </div>
  );
}

export default App;
