import React from 'react';
import ReactDOM from 'react-dom';
import ModalContainer from './ModalContainer';

function Modal({ children, handleModalClose }) {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalContainer handleModalClose={handleModalClose}>
          {children}
        </ModalContainer>,
        document.getElementById('modal-root'),
      )}
    </>
  );
}

export default Modal;
