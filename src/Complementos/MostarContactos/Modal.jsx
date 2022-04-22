
import "./contactos.css";
import { BotonCerrarModal } from "./Styles/Styles";

export const Modal = ({ children, isOpen, closeModal }) => {

  
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-contanier" onClick={handleModalClick}>
        {children}
        <BotonCerrarModal className="modal-close" onClick={closeModal}>
          X
        </BotonCerrarModal>
      </div>
    </article>
  );
};
