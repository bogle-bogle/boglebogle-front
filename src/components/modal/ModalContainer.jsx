import React, { useRef } from 'react';
import { ModalBackGround, ModalMain } from './modal.style';

function ModalContainer({ children, handleModalClose }) {
  const modalRef = useRef(null);

  const handleBackgroundModalClose = e => {
    if (modalRef.current === e.target) {
      handleModalClose();
    }
  };

  return (
    <ModalBackGround ref={modalRef} onClick={handleBackgroundModalClose}>
      <ModalMain>{children}</ModalMain>
    </ModalBackGround>
  );
}

export default ModalContainer;
