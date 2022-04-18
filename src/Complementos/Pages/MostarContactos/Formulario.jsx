import { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BotonGuardar, ContenedorFormulario } from "./Styles/Styles";

const url = "https://erudito-dev.herokuapp.com/api/contactos";

export const FormularioContactoCrear = ({ title }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [guardado, setGuardado] = useState(false);
  const navigate = useNavigate();

  const GuardarContacto = async (e) => {
    e.preventDefault();
    await axios.post(url, {
      nombre: nombre,
      email: email,
      telefono: telefono,
      mensaje: mensaje,
    });

    setGuardado(true);
    setTimeout(() => {
      setGuardado(null);
    }, 3000);
    setNombre("");
    setEmail("");
    setMensaje("");
    setTelefono("");
  };

  return (
    <ContenedorFormulario>
      <form onSubmit={GuardarContacto}>
        <h4>Crear Contactos {title} </h4>
        <input
          className="form-control mt-5"
          type="text"
          placeholder="Nombre"
          value={nombre}
          required
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          className="form-control mt-1"
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mt-1"
          type="number"
          placeholder="Telefono"
          value={telefono}
          required
          onChange={(e) => setTelefono(e.target.value)}
        />
        <textarea
          className="form-control mt-1"
          type="text"
          placeholder="Mensaje"
          required
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <BotonGuardar type="submit" className="mt-5">
          Guardar
        </BotonGuardar>
        {guardado ? (
          <div className="alert alert-info mt-2">
            <h6 className="d-flex m-2 justify-content-center">
              !Guardado Correctamente¡
            </h6>
          </div>
        ) : null}
      </form>
    </ContenedorFormulario>
  );
};

export const FormularioContactoEditar = ({ title }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [guardado, setGuardado] = useState(false);
  //const navigate = useNavigate();
  const { id } = useParams();

  return (
    <ContenedorFormulario>
      <form>
        <h4>Editar Contacto{title} </h4>
        <input
          className="form-control mt-5"
          type="text"
          placeholder="Nombre"
          value={nombre}
          required
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          className="form-control mt-1"
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mt-1"
          type="number"
          placeholder="Telefono"
          value={telefono}
          required
          onChange={(e) => setTelefono(e.target.value)}
        />
        <textarea
          className="form-control mt-1"
          type="text"
          placeholder="Mensaje"
          required
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <BotonGuardar type="submit" className="mt-5">
          Guardar
        </BotonGuardar>
        {guardado ? (
          <div className="alert alert-info mt-2">
            <h6 className="d-flex m-2 justify-content-center">
              !Guardado Correctamente¡
            </h6>
          </div>
        ) : null}
      </form>
    </ContenedorFormulario>
  );
};

export const FormularioLogin = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [guardado, setGuardado] = useState(false);

  return (
    <ContenedorFormulario>
      <form>
        <h4>Login{title} </h4>
        <input
          className="form-control mt-5"
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mt-1"
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <BotonGuardar type="submit" className="mt-5">
          Login
        </BotonGuardar>
        {guardado ? (
          <div className="alert alert-info mt-2">
            <h6 className="d-flex m-2 justify-content-center">
              !Guardado Correctamente¡
            </h6>
          </div>
        ) : null}
      </form>
    </ContenedorFormulario>
  );
};
