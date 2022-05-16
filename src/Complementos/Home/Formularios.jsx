import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  ContenedorFormularioPrincipal,
  AlertaFormulario,
  ContenedorBoton,
} from "./styles/Styles";

import { CrearContacto } from "../Helpers/ApiRest";


export const FormularioHome = () => {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const guardarContacto = async (data) => {
    const formmData = {
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono,
      mensaje: data.mensaje,
    };
    await CrearContacto(formmData);
    reset();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(null);
    }, 3000);
  };

  return (
    <>
      <ContenedorFormularioPrincipal>
        <form onSubmit={handleSubmit(guardarContacto)}>
          <h4>Contact Me...</h4>
          <div>
            {errors.nombre && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.nombre.message},
              </span>
            )}
          </div>

          <input
            {...register("nombre", {
              required: {
                value: true,
                maxLength: 6,
                message: "You have to enter a name"
              },
            })}
            name="nombre"
            autoComplete="off"
            type="text"
            className="form-control mb-2"
            placeholder="Name"
          />

          <div>
            {errors.email && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.email.message}
              </span>
            )}
          </div>

          <input
            {...register("email", {
              required: {
                value: true,
                message: "You have to enter a email",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                message: "The email format is not correct"
              },
            })}
            type="email"
            name="email"
            className="form-control mb-2"
            placeholder="Email"
          />

          <div>
            {errors.telefono && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.telefono.message},
              </span>
            )}
          </div>

          <input
            {...register("telefono", {
              required: {
                value: true,
                maxLength: 20,
                message: "You have to enter a phone"
              },
            })}
            type="number"
            name="telefono"
            className="form-control mb-2"
            placeholder="Phone"
          />

          <div>
            {errors.mensaje && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.mensaje.message},
              </span>
            )}
          </div>

          <textarea
            {...register("mensaje", {
              required: {
                value: true,
                message: "You have to enter a text"
              },
            })}
            type="text"
            name="mensaje"
            className="form-control mb-2"
            placeholder="Message"
          />

          <ContenedorBoton type="submit">Send</ContenedorBoton>

          {enviado && <AlertaFormulario>!Message Send</AlertaFormulario> }
        </form>
      </ContenedorFormularioPrincipal>
    </>
  );
};
