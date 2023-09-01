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

function TpbModal({ tpbItem }) {
  const navigate = useNavigate();
  const products = tpbItem.products || [];

  const categoryMap = {
    LV: '리빙',
    FS: '패션',
    FD: '간식',
    CR: '케어용품',
  };

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
                이달의 {categoryMap[product.mainCategoryCode]}
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

export default TpbModal;
