import { useState } from "react";

export const useModalMenu = (inicialValue = false) => {
  const [isOpen, setIsOpen] = useState(inicialValue);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return [isOpen, openModal, closeModal];
};
