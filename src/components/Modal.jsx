import { useState } from "react";
import { ModalContent, ModalWrapper, CloseButton } from "./Modal";
import { Button } from "./Button";

export default function Modal({ key_modal, children, title }) {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === `modal-${key_modal}`) {
      setModalVisible(false);
    }
  };

  return (
    <>
      <Button onClick={openModal}>{title}</Button>

      {modalVisible && (
        <ModalWrapper
          id={`modal-${key_modal}`}
          isModalVisible={modalVisible}
          onClick={handleOutsideClick}
          key={key_modal}
        >
          <ModalContent className="modal-content">
            <CloseButton className="close" onClick={closeModal}>
              &times;
            </CloseButton>
            {children}
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
}
