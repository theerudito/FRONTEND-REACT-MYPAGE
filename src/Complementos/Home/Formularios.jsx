import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  ContenedorFormularioPrincipal,
  AlertaFormulario,
  ContenedorBoton,
  Formulario,
} from "./styles/Styles";

import { CrearContacto } from "../Helpers/ApiRest";
import { ENGLISH } from "../Languages/EN";
import { SPANISH } from "../Languages/ES";

export const FormularioHome = () => {
  const [enviado, setEnviado] = useState(false);
  const date = new Date().getMilliseconds();
  const pic = `https://api.dicebear.com/5.x/micah/svg?seed=${date}`;

  const theme = localStorage.getItem("theme");
  const languages = localStorage.getItem("language");
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
      <ContenedorFormularioPrincipal theme={theme}>
        <Formulario onSubmit={handleSubmit(guardarContacto)} theme={theme}>
          {languages === "ES" ? (
            <h4>{SPANISH.form.contactMe} </h4>
          ) : (
            <h4>{ENGLISH.form.contactMe} </h4>
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
                message:
                  languages === "ES"
                    ? SPANISH.form.validation.name
                    : ENGLISH.form.validation.name,
              },
            })}
            name="name"
            autoComplete="off"
            type="text"
            className="form-control mb-2"
            placeholder={
              languages === "ES" ? SPANISH.form.name : ENGLISH.form.name
            }
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
                message:
                  languages === "ES"
                    ? SPANISH.form.validation.email
                    : ENGLISH.form.validation.email,
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                message:
                  languages === "ES"
                    ? SPANISH.form.validation.errorEmail
                    : ENGLISH.form.validation.errorEmail,
              },
            })}
            type="email"
            name="email"
            className="form-control mb-2"
            placeholder={
              languages === "ES" ? SPANISH.form.email : ENGLISH.form.email
            }
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
                message:
                  languages === "ES"
                    ? SPANISH.form.validation.phone
                    : ENGLISH.form.validation.phone,
              },
            })}
            type="number"
            name="phone"
            className="form-control mb-2"
            placeholder={
              languages === "ES" ? SPANISH.form.phone : ENGLISH.form.phome
            }
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
                message:
                  languages === "ES"
                    ? SPANISH.form.validation.message
                    : ENGLISH.form.validation.message,
              },
            })}
            type="text"
            name="message"
            className="form-control mb-2"
            placeholder={
              languages === "ES" ? SPANISH.form.message : ENGLISH.form.message
            }
          />

          {languages === "ES" ? (
            <ContenedorBoton type="submit">
              {SPANISH.form.send}{" "}
            </ContenedorBoton>
          ) : (
            <ContenedorBoton type="submit">
              {ENGLISH.form.send}{" "}
            </ContenedorBoton>
          )}

          {enviado && (
            <AlertaFormulario>
              {languages === "ES" ? SPANISH.form.info : ENGLISH.form.info}{" "}
            </AlertaFormulario>
          )}
        </Formulario>
      </ContenedorFormularioPrincipal>
    </>
  );
};
