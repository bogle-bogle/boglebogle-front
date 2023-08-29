import React from 'react';
import ReactDom from 'react-dom';
import ModalContainer from './ModalContainer';

function Modal({ children, handleModalClose }) {
  return (
    <>
      {ReactDom.createPortal(
        <ModalContainer handleModalClose={handleModalClose}>
          {children}
        </ModalContainer>,
        document.getElementById('modal-root'),
      )}
    </>
  );
}

export default Modal;
