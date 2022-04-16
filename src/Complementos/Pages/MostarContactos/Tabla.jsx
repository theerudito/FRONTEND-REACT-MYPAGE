import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useModalContactApp } from "../../Hooks/useModalContact";

import { FormularioContactoEditar } from "./Formulario";
import { Modal } from "./Modal";
import { BotonEditar, BotonEliminar, TBody, TD, TR } from "./Styles/Styles";

export const TablaApp = ({ item, id }) => {
  const [isOpenModal, openModal, closeModal] = useModalContactApp(false);

  const url = "https://erudito-dev.herokuapp.com/api/contactos";

  const Delete = async (id) => {
    await axios.delete(`${url}/${id}`);
  };

  return (
    <>
      <TBody>
        <TR>
          <td id="td">{item.nombre} </td>
          <TD id="hide">{item.email} </TD>
          <td id="td">{item.telefono} </td>
          <TD id="hide">{item.mensaje} </TD>
          <td id="td">
            <BotonEditar onClick={(e) => openModal(item._id)}>
              Editar
            </BotonEditar>

            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <FormularioContactoEditar />
            </Modal>
            <BotonEliminar onClick={() => Delete(item._id)}>
              Eliminar
            </BotonEliminar>
          </td>
        </TR>
      </TBody>
    </>
  );
};
