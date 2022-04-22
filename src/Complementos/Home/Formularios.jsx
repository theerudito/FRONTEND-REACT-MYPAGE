import React, { useState } from "react";

import axios from "axios";

import {
  ContenedorFormularioPrincipal,
  AlertaFormulario,
  ContenedorBoton,
} from "./styles/Styles";

const url = "https://erudito-dev.herokuapp.com/api/contactos";

export const FormularioHome = () => {
  const [nombre, setNombre] = useState([]);
  const [email, setEmail] = useState([]);
  const [telefono, setTelefono] = useState([]);
  const [mensaje, setMensaje] = useState([]);
  const [enviado, setEnviado] = useState(false);

  const guardarContacto = async (e) => {
    e.preventDefault();

    await axios.post(url, {
      nombre: nombre,
      email: email,
      telefono: telefono,
      mensaje: mensaje,
    });
    setEnviado(true);
    setTimeout(() => {
      setEnviado(null);
    }, 3000);
    setNombre("");
    setEmail("");
    setMensaje("");
    setTelefono("");
  };

  return (
    <>
      <ContenedorFormularioPrincipal>
        <h4>Contact Me...</h4>
        <form onSubmit={guardarContacto}>
          <div>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="form-control mt-2"
              type="texto"
              name="nombre"
              id="nombre"
              required
              placeholder="Name"
            />
          </div>

          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mt-2"
              type="email"
              name="email"
              id="nombre"
              required
              placeholder="Email"
            />
          </div>

          <div>
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="form-control mt-2"
              type="number"
              name="telefono"
              id="telefono"
              required
              placeholder="Phone"
            />
          </div>

          <div>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="form-control mt-2"
              type="texto"
              name="mensaje"
              required
              id="mensaje"
              placeholder="Message..."
            />
          </div>

          <ContenedorBoton id="button" type="submit">
            Send
          </ContenedorBoton>

          {enviado ? <AlertaFormulario>!Message Send</AlertaFormulario> : null}
        </form>
      </ContenedorFormularioPrincipal>
    </>
  );
};
