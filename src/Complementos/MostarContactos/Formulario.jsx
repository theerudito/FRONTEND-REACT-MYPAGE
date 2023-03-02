import {
  CrearContacto,
  EditarContacto,
  incialValueUser,
  loginUser,
} from "../Helpers/ApiRest";

import { BotonGuardar, ContenedorFormulario } from "./Styles/Styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  createContact,
  getContacts,
  setLogin,
} from "../../store/slices/edudito/erudito";

export const FormularioContactoCrear = () => {
  const [guardado, setGuardado] = useState(false);
  const [dataUser, setDataUser] = useState(incialValueUser);
  const dispatch = useDispatch();
  const date = new Date().getMilliseconds();
  const pic = `https://api.dicebear.com/5.x/micah/svg?seed=${date}`;

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    setGuardado(true);
    e.preventDefault();
    const newUser = {
      name: dataUser.name,
      email: dataUser.email,
      phone: dataUser.phone,
      message: dataUser.message,
      pic,
    };
    const data = await CrearContacto(newUser);
    dispatch(createContact(data));
    setTimeout(() => {
      setGuardado(false);
      setDataUser(incialValueUser);
    }, 2000);
    console.log("enviando");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContenedorFormulario>
      <form onSubmit={handleSubmit}>
        <h4>Crear Contacto</h4>

        <input
          name="name"
          value={dataUser.name}
          onChange={handleChange}
          autoComplete="off"
          type="text"
          className="form-control mb-2"
          placeholder="Name"
        />

        <input
          value={dataUser.email}
          onChange={handleChange}
          type="email"
          name="email"
          className="form-control mb-2"
          placeholder="Email"
        />

        <input
          value={dataUser.phone}
          onChange={handleChange}
          type="number"
          name="phone"
          className="form-control mb-2"
          placeholder="Phone"
        />

        <textarea
          value={dataUser.message}
          onChange={handleChange}
          type="text"
          name="message"
          className="form-control mb-2"
          placeholder="Message"
          required
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

export const FormularioContactoEditar = () => {
  const [guardado, setGuardado] = useState(false);
  const { user } = useSelector((store) => store.erudito);
  const [dataUser, setDataUser] = useState(incialValueUser);

  const guardarContacto = async (e) => {
    setGuardado(true);
    e.preventDefault();
    const id = user._id;
    await EditarContacto(id, dataUser);
    setTimeout(() => {
      setGuardado(false);
      setDataUser(incialValueUser);
    }, 2000);
  };

  useEffect(() => {
    setDataUser(user);
  }, [user]);

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContenedorFormulario>
      <form onSubmit={guardarContacto}>
        <h4>Editar Contacto</h4>

        <input
          name="name"
          autoComplete="off"
          type="text"
          value={dataUser.name}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          value={dataUser.email}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Email"
          required
        />

        <input
          type="number"
          name="phone"
          value={dataUser.phone}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Phone"
        />

        <textarea
          type="text"
          name="message"
          value={dataUser.message}
          onChange={handleChange}
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

export const FormularioLogin = (e) => {
  const [cretentials, setCretentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [message] = useState(false);

  const loginData = async (e) => {
    e.preventDefault();
    try {
      const credederntialsDB = await loginUser(cretentials);

      if (credederntialsDB) {
        console.log("credenciales correctas");
        dispatch(setLogin(false));
        localStorage.setItem("accessToken", JSON.stringify(credederntialsDB));
        window.location.href = "/account";
      } else {
        alert("password or email is incorrect");
      }
    } catch (error) {
      setError("password or email is incorrect");
    }
  };

  const onChange = (e) => {
    setCretentials({
      ...cretentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContenedorFormulario>
      <form onSubmit={loginData}>
        <h4>Login </h4>
        <input
          className="form-control mt-5"
          type="email"
          placeholder="Email"
          required
          name="email"
          value={cretentials.email}
          onChange={onChange}
        />

        <input
          className="form-control mt-1"
          type="password"
          placeholder="Password"
          required
          name="password"
          value={cretentials.password}
          onChange={onChange}
        />

        <BotonGuardar type="submit" className="mt-5">
          Login
        </BotonGuardar>
      </form>
      {
        <p
          style={{
            color: "red",
            fontSize: "12px",
            margim: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {message && <span>{error} </span>}
        </p>
      }
    </ContenedorFormulario>
  );
};
