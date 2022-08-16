import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  ContenedorFormularioPrincipal,
  AlertaFormulario,
  ContenedorBoton,
} from "./styles/Styles";

import { CrearContacto } from "../Helpers/ApiRest";
import { useSelector } from "react-redux";
import { ENGLISH } from "../Languages/EN";
import { SPANISH } from "../Languages/ES";

export const FormularioHome = () => {
  const [enviado, setEnviado] = useState(false);
  const date = new Date().getMilliseconds();
  const pic = `https://avatars.dicebear.com/api/micah/${date}.svg`;
  const { languages } = useSelector((store) => store.erudito);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const guardarContacto = async (data) => {
    const formmData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      pic,
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
          {languages ? (
            <h4>{ENGLISH.form.contactMe} </h4>
          ) : (
            <h4>{SPANISH.form.contactMe} </h4>
          )}

          <div>
            {errors.name && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.name.message},
              </span>
            )}
          </div>

          <input
            {...register("name", {
              required: {
                value: true,
                maxLength: 6,
                message: "You have to enter a name",
              },
            })}
            name="name"
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
                message: "The email format is not correct",
              },
            })}
            type="email"
            name="email"
            className="form-control mb-2"
            placeholder="Email"
          />

          <div>
            {errors.phone && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.phone.message},
              </span>
            )}
          </div>

          <input
            {...register("phone", {
              required: {
                value: true,
                maxLength: 20,
                message: "You have to enter a phone",
              },
            })}
            type="number"
            name="phone"
            className="form-control mb-2"
            placeholder="Phone"
          />

          <div>
            {errors.message && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.message.message},
              </span>
            )}
          </div>

          <textarea
            {...register("message", {
              required: {
                value: true,
                message: "You have to enter a text",
              },
            })}
            type="text"
            name="message"
            className="form-control mb-2"
            placeholder="Message"
          />

          {languages ? (
            <ContenedorBoton type="submit">
              {ENGLISH.form.send}{" "}
            </ContenedorBoton>
          ) : (
            <ContenedorBoton type="submit">
              {SPANISH.form.send}{" "}
            </ContenedorBoton>
          )}

          {enviado && <AlertaFormulario>!Message Send</AlertaFormulario>}
        </form>
      </ContenedorFormularioPrincipal>
    </>
  );
};
