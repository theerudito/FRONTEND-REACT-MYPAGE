import axios from "axios";
import { useModalContactApp } from "../../Hooks/useModalContact";
import { BotonEditar, BotonEliminar } from "./Botones";
import { FormularioContactoEditar } from "./Formulario";
import { Modal } from "./Modal";

export const TablaApp = ({ item, id }) => {
  const [isOpenModal, openModal, closeModal] = useModalContactApp(false);

  console.log(item);

  const url = "https://erudito-dev.herokuapp.com/api/contactos";

  const Delete = async (id) => {
    await axios.delete(`${url}/${id}`);
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{item.nombre} </td>
          <td>{item.email} </td>
          <td>{item.telefono} </td>
          <td>{item.mensaje} </td>
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
        </tr>
      </tbody>
    </>
  );
};
