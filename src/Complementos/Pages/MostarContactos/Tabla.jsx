import axios from "axios";
import { useModalContactApp } from "../../Hooks/useModalContact";

import { FormularioContactoEditar } from "./Formulario";
import { Modal } from "./Modal";
import { BotonEditar, BotonEliminar, TBody, TD, TR } from "./Styles/Styles";

export const TablaApp = ({ item, id }) => {
  const [isOpenModal, openModal, closeModal] = useModalContactApp(false);

  console.log(item);

  const url = "https://erudito-dev.herokuapp.com/api/contactos";

  const Delete = async (id) => {
    await axios.delete(`${url}/${id}`);
  };

  return (
    <>
      <TBody>
        <TR>
          <td>{item.nombre} </td>
          <td>{item.email} </td>
          <TD>{item.telefono} </TD>
          <TD>{item.mensaje} </TD>
          <td>
            <BotonEditar onClick={() => openModal(item._id)}>
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
