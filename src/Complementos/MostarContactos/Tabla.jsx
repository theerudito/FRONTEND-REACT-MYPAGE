import { useContext } from "react";
import { useModalContactApp } from "../Hooks/useModalContact";
import contactContext from "../Provider/ContactsProvider";
import { FormularioContactoEditar } from "./Formulario";
import { Modal } from "./Modal";
import { BotonEditar, BotonEliminar, TBody, TD, TR } from "./Styles/Styles";
export const TablaApp = ({ item }) => {
  const [isOpenModal, openModal, closeModal] = useModalContactApp(false);
  const { getAllUsers, deleteUser } = useContext(contactContext);



  const Delete = async (id) => {
    await deleteUser(id);
    getAllUsers();
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
