import React from 'react';
import { ModalBackGround, ModalMain } from './modal.style';

function ModalContainer({ children, handleModalClose }) {
  return (
    <ModalBackGround onClick={handleModalClose}>
      <ModalMain>{children}</ModalMain>
    </ModalBackGround>
  );
}

export default ModalContainer;
