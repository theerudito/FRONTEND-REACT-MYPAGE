import { useContext } from "react";
import { useModalContactApp } from "../Hooks/useModalContact";
import contactContext from "../Provider/ContactsProvider";
import { FormularioContactoEditar } from "./Formulario";
import { Modal } from "./Modal";
import { BotonEditar, BotonEliminar, Profile, TBody, TD, TR } from "./Styles/Styles";
export const TablaApp = ({ item }) => {
  const [isOpenModal, openModal, closeModal] = useModalContactApp(false);
  const { getAllUsers, deleteUser, getOneUser } = useContext(contactContext);

  const Delete = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const GetUserById = async (id, userData) => {
    await getOneUser(id, userData);
  };

  return (
    <>
      <TBody>
        <TR>
          <Profile src={item.pic} alt="pic" />
          <td id="td">{item.nombre} </td>
          <TD id="hide">{item.email} </TD>
          <td id="td">{item.telefono} </td>
          <TD id="hide">{item.mensaje} </TD>
          <td id="td">
            <BotonEditar
              onClick={(e) => openModal(GetUserById(item._id, item))}
            >
              Editar
            </BotonEditar>

            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <FormularioContactoEditar item={item} Userid={item._id} />
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
