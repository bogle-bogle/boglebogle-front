import React from 'react';
import FadeModalContainer from './FadeModalContainer';
import ReactDOM from 'react-dom';

function FadeModal({ children, visible }) {
  return (
    <>
      {ReactDOM.createPortal(
        <FadeModalContainer visible={visible}>{children}</FadeModalContainer>,
        document.getElementById('modal-root'),
      )}
    </>
  );
}

export default FadeModal;
