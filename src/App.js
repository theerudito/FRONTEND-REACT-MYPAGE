import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Inicio } from './Complementos/Inicio/Inicio';
import { MostrarContactos } from './Complementos/MostarContactos/MostrarContactos';
import PorfolioApp from './Complementos/Rutas/porfolio';


function App() {
  return (
    <div className='App-header'>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Inicio/>} />
         <Route path='/contacto' element={<Inicio/>} />
         <Route path='/porfolio' element={<PorfolioApp/>} />
         <Route path='/api/contactos' element={<MostrarContactos/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
