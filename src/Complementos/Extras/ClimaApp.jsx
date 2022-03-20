import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconosClima } from "./IconosClima";

const url = `http://api.openweathermap.org/data/2.5/weather?q=Ecuador&lang=es&units=metric&appid=6a3b130f8cc2a2577fac82539b3ca3cb`;

const iniciaState = { temperatura: "dd", pais: "", clima: "", logo: "" };

export const ClimaApp = () => {
  const [clima, setClima] = useState(iniciaState);

  // window.addEventListener("load", () => {

  // })

  const obtenerDatos = async () => {
    const res = await axios.get(url);
    const data = await res.data;
    //console.log(data);

    const datosClima = {
      pais: data.name,
      temperatura: data.main.temp_max,
      clima: data.weather[0].description,
      logo: data.weather[0].icon,
    };
    setClima(datosClima);
    //console.log(datosClima)

    switch (data.weather[0].main) {
      case 'Thunderstorm':
        
        console.log('TORMENTA');
        break;
      case 'Drizzle':
        <IconosClima/>
        console.log('LLOVIZNA');
        break;
      case 'Rain':
        
        console.log('LLUVIA');
        break;
      case 'Snow':
        
          console.log('NIEVE');
        break;                        
      case 'Clear':
        
          console.log('LIMPIO');
        break;
      case 'Atmosphere':
        
          console.log('ATMOSFERA');
          break;  
      case 'Clouds':

          console.log('NUBLADO');
          break;  
      default:
        
        console.log('por defecto');
}

  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div id="temporal">

      <div id="country">
      <p >Pais: </p>
      <h5 id="pa_">{clima.pais}</h5>
      </div>

      <div id="temperatura">
      <p id="tep">Temperatura: </p>
      <h5 id="tempe">{Math.round(clima.temperatura)} C° </h5>
      </div>

      <div id="clima">
      <p id="clim">Clima: </p>
      <h5 id="cli">{clima.clima}</h5>
      </div>

      <div id="logo">
      <img src={clima.logo} alt="log" id="log" />
      </div>

    </div>
  );
};
