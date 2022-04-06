import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Inicio } from './Complementos/Inicio/Inicio';
import { Page404App } from './Complementos/Page404/Page404';
import { MostrarContactoApp } from './Complementos/Rutas/MostarContactos/MostrarContacto';
import { PorfolioPage } from './Complementos/Rutas/Porfolio/PorfolioPage';



function App() {
  return (
    <div className='App-header'>
      <div className='contenido'>
          <BrowserRouter>
       <Routes>
         <Route path='/' element={<Inicio/>} />
         <Route path='/contacto' element={<Inicio/>} />
         <Route path='/porfolio' element={<PorfolioPage/>} />
         <Route path='/api/contactos' element={ <MostrarContactoApp/>} />
         <Route path='*' element={<Page404App/>} />   
       </Routes>
          </BrowserRouter>
      </div>
    
    </div>
  );
}

export default App;
