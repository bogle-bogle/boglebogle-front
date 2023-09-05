import React from 'react';
import { FadeModalBackGround, FadeModalMain } from './fade-modal.style';

function FadeModalContainer({ children, handleModalClose }) {
  return (
    <FadeModalBackGround visible={true}>
      <FadeModalMain visible={true}>{children}</FadeModalMain>
    </FadeModalBackGround>
  );
}

export default FadeModalContainer;
