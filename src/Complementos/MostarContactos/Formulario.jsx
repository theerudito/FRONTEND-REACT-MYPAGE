import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CrearContacto } from "../Helpers/ApiRest";
import contactContext from "../Provider/ContactsProvider";
import { BotonGuardar, ContenedorFormulario } from "./Styles/Styles";

export const FormularioContactoCrear = () => {
  const [guardado, setGuardado] = useState(false);
  const { getAllUsers } = useContext(contactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const guardarContacto = async (data) => {
    await CrearContacto(data);
    reset();
    getAllUsers();
    setGuardado(true);
    setTimeout(() => {
      setGuardado(null);
    }, 3000);
  };

  return (
    <ContenedorFormulario>
      <form onSubmit={handleSubmit(guardarContacto)}>
        <h4>Crear Contacto</h4>
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
              message: "Tienes que ingresar un nombre",
              maxLength: 20,
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
              message: "Tienes que ingresar un email",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              message: "El formato de email no es correcto",
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
              message: "Tienes que ingresar un numero",
              maxLength: 20,
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
              message: "Tienes que ingresar un texto",
            },
          })}
          type="text"
          name="mensaje"
          className="form-control mb-2"
          placeholder="Message"
        />

        <BotonGuardar type="submit" className="mt-5">
          Guardar
        </BotonGuardar>
        {guardado && (
          <div className="alert alert-info mt-2">
            <h6 className="d-flex m-2 justify-content-center">
              !Guardado Correctamente¡
            </h6>
          </div>
        )}
      </form>
    </ContenedorFormulario>
  );
};

export const FormularioContactoEditar = ({ Userid, item }) => {
  //let id = Userid;
  const [guardado, setGuardado] = useState(false);
  const { getAllUsers, upateUser, getOneUser } = useContext(contactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let userData = {
    id: item._id,
    nombre: item.nombre,
    email: item.email,
    telefono: item.telefono,
    mensaje: item.mensaje,
  };

  const obtenerUnaContact = async(item, userData) => {
      await getOneUser()
  }



  const guardarContacto = async(data) => {
    await upateUser(Userid, data, userData);
    reset();
    getAllUsers();
    setGuardado(true);
    setTimeout(() => {
      setGuardado(null);
    }, 3000);
  };


  return (
    <ContenedorFormulario>
      <form onSubmit={handleSubmit(guardarContacto)}>
        <h4>Editar Contacto</h4>
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
              message: "Tienes que ingresar un nombre",
              maxLength: 20,
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
              message: "Tienes que ingresar un email",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              message: "El formato de email no es correcto",
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
              message: "Tienes que ingresar un numero",
              maxLength: 20,
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
              message: "Tienes que ingresar un texto",
            },
          })}
          type="text"
          name="mensaje"
          className="form-control mb-2"
          placeholder="Message"
        />

        <BotonGuardar type="submit" className="mt-5">
          Guardar
        </BotonGuardar>
        {guardado && (
          <div className="alert alert-info mt-2">
            <h6 className="d-flex m-2 justify-content-center">
              !Editado Correctamente¡
            </h6>
          </div>
        )}
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
              !Logiado Correctamente¡
            </h6>
          </div>
        ) : null}
      </form>
    </ContenedorFormulario>
  );
};
