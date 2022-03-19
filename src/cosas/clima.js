window.addEventListener("load", () => {
  let longitud
  let latitud

    let temperaturaValor = document.getElementById("temperatura-valor")
    let temperaturaDescripcion = document.getElementById("temperatura-descripcion")

    let ubicacion = document.getElementById("ubicacion")
    let iconoAnimado = document.getElementById("icono-animado")
    let vientoVelocidad = document.getElementById("viento-velocidad")

  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(posicion => {
        
        longitud = posicion.coords.longitude
        latitud = posicion.coords.latitude


        //Ubicacion Actual
       const ciudad  = `http://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&lat=${latitud}&lon=${longitud}&appid=6a3b130f8cc2a2577fac82539b3ca3cb`
       console.log(ciudad);


        // Unicacion Por Ciudad
        const pais = `http://api.openweathermap.org/data/2.5/weather?q=Ecuador&lang=es&units=metric&appid=6a3b130f8cc2a2577fac82539b3ca3cb`
        

        fetch(ciudad)
          .then(res => { return res.json()})
          .then(data => {
          
            let temperatura = Math.round(data.main.temp)
            temperaturaValor.textContent = `${temperatura} °C`
            
            let descripcion = data.weather[0].description
            temperaturaDescripcion.textContent = descripcion.toUpperCase()
            
            let ciudad = data.name
            ubicacion.textContent = ciudad

            let velocidad = data.wind.speed
            vientoVelocidad.textContent = `${velocidad} m/s`
            
              //console.log(data);
              
  
            //console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      iconoAnimado.src='img/clima/thunder.svg'
                      console.log('TORMENTA');
                      break;
                        case 'Drizzle':
                      iconoAnimado.src='img/clima/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                        case 'Rain':
                      iconoAnimado.src='img/clima/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                        case 'Snow':
                      iconoAnimado.src='img/clima/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                        case 'Clear':
                        iconoAnimado.src='img/clima/day.svg'
                        console.log('LIMPIO');
                      break;
                        case 'Atmosphere':
                      iconoAnimado.src='img/clima/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                          case 'Clouds':
                        iconoAnimado.src='img/clima/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                          default:
                      iconoAnimado.src='img/clima/cloudy-day-1.svg'
                      console.log('por defecto');
                  }
          })
          .catch(error => {console.log(error)})
      })
  }

})