import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurationBtn, CurationCheckboxWrapper, CurationContainer, CurationHiddenCheckbox, CurationMainBtn, CurationMiniTitle, CurationOption, CurationSelect, CurationStyledCheckbox, CurationTitle } from './submodal.style copy';
import { Checkbox } from '@mui/material';

function TpbSubModal({ tpbItem }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  return (
    <CurationContainer>
      <CurationTitle>
        정기구독 배송주기 설정
      </CurationTitle>
      <hr style={{color:'lightgray'}}/>
      <CurationMiniTitle>이용기간 *</CurationMiniTitle>
      <CurationSelect>
        <CurationOption value="무기한">무기한</CurationOption>
        <CurationOption value="1">1개월</CurationOption>
        <CurationOption value="2">2개월</CurationOption>
        <CurationOption value="3">3개월</CurationOption>
        <CurationOption value="4">4개월</CurationOption>
        <CurationOption value="5">5개월</CurationOption>
        <CurationOption value="6">6개월</CurationOption>
        <CurationOption value="7">7개월</CurationOption>
        <CurationOption value="8">8개월</CurationOption>
        <CurationOption value="9">9개월</CurationOption>
        <CurationOption value="10">10개월</CurationOption>
        <CurationOption value="11">11개월</CurationOption>
        <CurationOption value="12">12개월</CurationOption>      
      </CurationSelect>

      <CurationMiniTitle>배송주기 *</CurationMiniTitle>
      <CurationBtn radioGroup='curation-term'>4주에 한 번</CurationBtn>
      <CurationBtn radioGroup='curation-term'>8주에 한 번</CurationBtn>

      <CurationMiniTitle>배송 요일 *</CurationMiniTitle>
      <CurationBtn>금</CurationBtn>

      <br></br>
      <CurationCheckboxWrapper>
        <CurationHiddenCheckbox checked={checked} onChange={() => setChecked(!checked)} />
          <CurationStyledCheckbox checked={checked} />
          이용기간 만료 후 자동 연장
      </CurationCheckboxWrapper>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CurationMainBtn onClick={() => navigate('/order')}>구독 신청하기</CurationMainBtn>
      </div>

    </CurationContainer>
    
  );
}

export default TpbSubModal;
