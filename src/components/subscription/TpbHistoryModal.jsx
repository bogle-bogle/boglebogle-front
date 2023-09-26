import React from 'react';
import {
  HistoryCategory,
  HistoryContainer,
  HistoryContent,
  HistoryContentBox,
  HistoryContentElement,
  HistoryElementBtn,
  HistoryElementImg,
  HistoryElementName,
  HistoryMainImg,
} from './history.style';
import { useNavigate } from 'react-router-dom';
import { productMain } from '../../commonCode';

function TpbHistoryModal({ tpbItem }) {
  const navigate = useNavigate();
  const products = tpbItem.products || [];

  return (
    <HistoryContainer>
      <HistoryMainImg src={tpbItem.imgUrl} alt={''} />
      <HistoryContent>
        {products.map((product, index) => (
          <HistoryContentBox key={index}>
            <HistoryElementImg
              src={product.mainImgUrl}
              alt={`Product Image ${index + 1}`}
            />
            <HistoryContentElement>
              <HistoryCategory>
                이 달의 {productMain[product.mainCategoryCode]}
              </HistoryCategory>
              <HistoryElementName>{product.name}</HistoryElementName>
              <HistoryElementBtn
                onClick={() => navigate(`/product/${product.id}`)}
              >
                상품 상세 보기＞
              </HistoryElementBtn>
            </HistoryContentElement>
          </HistoryContentBox>
        ))}
      </HistoryContent>
    </HistoryContainer>
  );
}

export default TpbHistoryModal;
