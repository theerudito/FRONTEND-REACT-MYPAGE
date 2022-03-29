import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Inicio } from './Complementos/Inicio/Inicio';
import { Page404App } from './Complementos/Page404/Page404';
import { MostrarContactosApp } from './Complementos/Rutas/MostarContactos/MostrarContactos';
import { PorfolioPage } from './Complementos/Rutas/Porfolio/PorfolioPage';



function App() {
  return (
    <div className='App-header'>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Inicio/>} />
         <Route path='/contacto' element={<Inicio/>} />
         <Route path='/porfolio' element={<PorfolioPage/>} />
         <Route path='/api/contactos' element={<MostrarContactosApp/>} />
         <Route path='*' element={<Page404App/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
