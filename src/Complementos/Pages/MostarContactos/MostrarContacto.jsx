import React, { useEffect, useState } from "react";
import { MostrarTodosLosContactos } from "../../Helpers/ApiRest";
import { useModalContactApp } from "../../Hooks/useModalContact";
import { inicialState } from "../../InicialValues/InicialValue";
import { BotonCrear } from "./Botones";
import { FormularioContactoCrear } from "./Formulario";
import { Modal } from "./Modal";
import { TablaApp } from "./Tabla";

export const MostrarContactoApp = () => {
  const [contact, setContact] = useState(inicialState);
  const [isOpenModal, openModal, closeModal] = useModalContactApp(false);



  const updateContact = async () => {
    const data = await MostrarTodosLosContactos();
    setContact(data);
    //console.log(data);
  };

  useEffect(() => {
    updateContact();
  }, []);

  return (
    <div className="container">
      <h1>Consulta de Contactos</h1>
      <BotonCrear onClick={openModal}>Crear</BotonCrear>
      

      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <FormularioContactoCrear />
      </Modal>
      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Mensaje</th>
              <th>Acciones</th>
            </tr>
          </thead>

          {contact.map(
            (item, _id) => (
              (<TablaApp item={item} id={_id} />)
            )
          )}
        </table>
      </div>
    </div>
  );
};
