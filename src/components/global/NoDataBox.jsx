import React from 'react';
import { useNavigate } from 'react-router';
import { AddBtn, NoDataContainer, SadHeendy } from './nodatabox.style';
import sadheendy from "../../assets/custom/sadheendy.png";

function NoDataBox(props) {
  const { dataType, onAddClick, addButtonText, link } = props;
  const navigate = useNavigate();

  return (
    <NoDataContainer>
      <SadHeendy src={sadheendy} alt=" " />
      <p className="nopet-message">저장된 {dataType} 정보가 없네요 😥</p>
      <AddBtn onClick={() => navigate(link)}>
        {addButtonText}
      </AddBtn>
    </NoDataContainer>
  );
}

export default NoDataBox;
