import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconosClima } from "./IconosClima";

const url = `http://api.openweathermap.org/data/2.5/weather?q=Ecuador&lang=es&units=metric&appid=6a3b130f8cc2a2577fac82539b3ca3cb`;

const iniciaState = { temperatura: "", pais: "", clima: "", logo: "" };

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
      case "Thunderstorm":
        console.log("TORMENTA");
        break;
      case "Drizzle":
        <IconosClima />;
        console.log("LLOVIZNA");
        break;
      case "Rain":
        console.log("LLUVIA");
        break;
      case "Snow":
        console.log("NIEVE");
        break;
      case "Clear":
        console.log("LIMPIO");
        break;
      case "Atmosphere":
        console.log("ATMOSFERA");
        break;
      case "Clouds":
        console.log("NUBLADO");
        break;
      default:
        console.log("por defecto");
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div>
      <div>
        <h4>Ciudad: {clima.pais} </h4>
      </div>

      <div>
        <h4>Temperatura: {Math.round(clima.temperatura)} C°</h4>
      </div>

      <div>
        <h4>Clima: {clima.clima} </h4>
      </div>

      <div>
        <img src={clima.logo} alt="log" />
      </div>
    </div>
  );
};
