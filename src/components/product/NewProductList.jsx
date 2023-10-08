import React, { useEffect } from 'react';
import {
  CardContainer,
  CategoryContainer,
  CategoryElementContainer,
  CategoryP,
  DogButton,
  DogListContainer,
  FilterCategoryContainer,
  FilterCategoryRow,
  FilterCategoryTitle,
  InitialButton,
  MiddleContainer,
  MiddlePageContainer,
  MiddlePagenationContainer,
  PageArrow,
  PageState,
  PageTitle,
  ProductCardContainer,
  ProductContainer,
  ProductWarningMark,
  ShopContainer,
  WraningText,
} from './index.style';
import { shopCategory, proteinCode } from '../../commonCode';
import CategoryFilterButton from './CategoryFilterButton';
import { useState } from 'react';
import {
  initialMainCategory,
  initialSubCategory,
  initialProteinCategory,
} from '../../utils/productFilter';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ProductCard from './ProductCard';
import * as Api from '../../api';
import { RxReset } from 'react-icons/rx';

import { GoDotFill } from 'react-icons/go';

import { useSelector } from 'react-redux';
import ProductRecommendation from '../recommendation/ProductRecommendation';
import { useRef } from 'react';
import { eventLog } from '../../utils/event_log';
import { HeendyRecommendation } from '../recommendation/index.style';
import RcHeendy from '../../assets/recommendation/오옹오.png';

function NewProductList() {
  const member = useSelector(state => state.member);

  const [mainCategory, setMainCategory] = useState('FD');
  const [subFilterList, setSubFilterList] = useState([]);
  const [proteinFilterList, setProteinFilterList] = useState([]);

  const [mainFilterChecked, setMainFilterChecked] = useState({
    ...initialMainCategory,
    FD: true,
  });

  const [subFilterChecked, setSubFilterChecked] = useState({});
  const [proteinFilterChecked, setProteinFilterChecked] = useState({
    ...initialProteinCategory,
  });

  const [curPage, setCurPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [productList, setProductList] = useState([]);

  const [curPet, setCurPet] = useState(
    member && member.pet && member.pet.length > 0 && member.pet[0],
  );

  const clickRef = useRef(false);
  const clickDataRef = useRef(null);

  const handleLog = (page, element, isClicked, itemId) => {
    clickDataRef.current = { page, element, isClicked, itemId };
  };

  const handleClickRef = flag => {
    clickRef.current = flag;
  };

  useEffect(() => {
    return () => {
      if (!clickRef.current) {
        eventLog({ page: 'shop', element: null, itemId: null, isClicked: 'N' });
      } else {
        eventLog(clickDataRef.current);
      }
    };
  }, []);
  useEffect(() => {
    Api.post(`/api/product/list/${curPage}`, {
      mainFilter: mainCategory,
      subFilter: subFilterList,
      proteinFilter: proteinFilterList,
    }).then(res => {
      setProductList([...res.data.products]);
      setTotalCount(res.data.count);

      let cnt = parseInt(res.data.count / 20);
      if (res.data.count % 20 > 0) {
        cnt += 1;
      }
      setPageCount(cnt);
    });
  }, [curPage, subFilterList, mainCategory, proteinFilterList]);

  const handleMainChecked = id => {
    setMainFilterChecked(() => {
      const newObj = { ...initialMainCategory, [id]: true };
      return newObj;
    });
    setMainCategory(() => id);
    setSubFilterChecked(() => {
      return { ...initialSubCategory[mainCategory] };
    });

    setSubFilterList([]);
    setProteinFilterList([]);
    setCurPage(1);
  };

  const handleSubChecked = id => {
    setSubFilterList(prev => {
      if (subFilterChecked[id] === true) {
        return prev.filter(element => element !== id);
      } else {
        return [...prev, id];
      }
    });
    setSubFilterChecked(prev => {
      return { ...prev, [id]: !prev[id] };
    });
    setCurPage(1);
  };

  const handleProteinChecked = id => {
    setProteinFilterList(prev => {
      if (proteinFilterChecked[id] === true) {
        return prev.filter(element => element !== id);
      } else {
        return [...prev, id];
      }
    });

    setProteinFilterChecked(prev => {
      return { ...prev, [id]: !prev[id] };
    });
    setCurPage(1);
  };

  const handlePage = page => {
    if (page === 0 || page > pageCount) {
      return;
    }
    setCurPage(page);
  };

  const initFilter = () => {
    setMainCategory('');
    setSubFilterList([]);
    setProteinFilterList([]);

    setMainFilterChecked({
      ...initialMainCategory,
    });
    setSubFilterChecked({});
    setProteinFilterChecked({ ...initialProteinCategory });
  };

  const createProductCard = (product, idx) => {
    let warnFlag =
      curPet && mainCategory === 'FD' && product.ingredients !== null;
    let allergyFlag = false;

    let allergiesList = curPet.allergies;

    let allergyName = '';
    if (warnFlag && allergiesList.length > 0) {
      if (allergiesList.includes(product.proteinCode)) {
        allergyName = proteinCode[product.proteinCode];
        allergyFlag = true;
      }

      if (!allergyFlag) {
        for (let i = 0; i < allergiesList.length; i++) {
          if (product.ingredients.includes(proteinCode[allergiesList[i]])) {
            allergyFlag = true;
            allergyName = proteinCode[allergiesList[i]];
            break;
          }
        }
      }
    }

    return (
      <CardContainer>
        {allergyFlag ? (
          <ProductWarningMark>
            <GoDotFill style={{ color: 'darkred', marginLeft: '5px' }} />
            <WraningText>{`나의 강아지 알러지 성분 : ${allergyName}`}</WraningText>
          </ProductWarningMark>
        ) : (
          <ProductWarningMark style={{ visibility: 'hidden' }}>
            <GoDotFill style={{ color: 'darkred' }} />
            <WraningText>{`나의 강아지 알러지 성분 : ${allergyName}`}</WraningText>
          </ProductWarningMark>
        )}
        <ProductCard key={idx} product={product}></ProductCard>
      </CardContainer>
    );
  };

  const handleOnChange = e => {
    setCurPet(() => {
      const newObj = member.pet.filter(p => p.id === e.target.value)[0];
      return newObj;
    });
  };

  const createProductRecommendation = () => {
    if (curPet) {
      return (
        <HeendyRecommendation>
          <ProductRecommendation
            type={'detail'}
            param={curPet.id}
            handleLog={handleLog}
            handleClickRef={handleClickRef}
          />
          <div>
            <img
              src={RcHeendy}
              style={{
                width: '190px',
                marginBottom: '0px',
                paddingBottom: '0px',
              }}
            />
          </div>
        </HeendyRecommendation>
      );
    }
  };

  const createPetList = () => {
    if (localStorage.getItem('userToken') === null) return;

    if (member.pet.length === 0) return;

    return (
      <>
        {member.pet.map(p => (
          <DogButton
            isClicked={curPet.id === p.id}
            onClick={() => {
              setCurPet(p);
            }}
          >
            {p.name}
          </DogButton>
        ))}
      </>
    );
  };

  return (
    <ShopContainer>
      <PageTitle>쇼핑</PageTitle>

      <CategoryP>
        {`쇼핑`}
        {mainCategory !== '' && `  >  ${shopCategory[mainCategory].name}`}
      </CategoryP>

      {createProductRecommendation()}

      <CategoryContainer>
        <CategoryP></CategoryP>
        <InitialButton onClick={initFilter}>
          <RxReset style={{ marginRight: '3px', color: 'white' }} />
          필터 초기화
        </InitialButton>
      </CategoryContainer>
      <FilterCategoryContainer>
        <FilterCategoryRow>
          <FilterCategoryTitle>대분류</FilterCategoryTitle>
          <CategoryElementContainer>
            {Object.entries(shopCategory).map(([key, value]) => (
              <CategoryFilterButton
                className="filter"
                key={key}
                id={key}
                isChecked={mainFilterChecked[key]}
                handleFilter={() => handleMainChecked(key)}
              >
                {value.name}
              </CategoryFilterButton>
            ))}
          </CategoryElementContainer>
        </FilterCategoryRow>
        {mainCategory !== '' && (
          <FilterCategoryRow>
            <FilterCategoryTitle>소분류</FilterCategoryTitle>
            <CategoryElementContainer>
              {Object.entries(shopCategory[mainCategory].subCategory).map(
                ([key, value]) => {
                  if (key === '44') {
                    return null;
                  }

                  return (
                    <CategoryFilterButton
                      className="filter"
                      key={key}
                      id={key}
                      isChecked={subFilterChecked[key]}
                      handleFilter={() => handleSubChecked(key)}
                    >
                      {value}
                    </CategoryFilterButton>
                  );
                },
              )}
            </CategoryElementContainer>
          </FilterCategoryRow>
        )}
        {mainCategory === 'FD' && (
          <FilterCategoryRow>
            <FilterCategoryTitle>주재료</FilterCategoryTitle>
            <CategoryElementContainer>
              {Object.entries(proteinCode).map(([key, value]) => (
                <CategoryFilterButton
                  className="filter"
                  key={key}
                  id={key}
                  isChecked={proteinFilterChecked[key]}
                  handleFilter={() => handleProteinChecked(key)}
                >
                  {value}
                </CategoryFilterButton>
              ))}
            </CategoryElementContainer>
          </FilterCategoryRow>
        )}
      </FilterCategoryContainer>

      <DogListContainer>{createPetList()}</DogListContainer>
      <MiddleContainer>
        <div style={{ display: 'flex', alignItems: 'center', width: 'auto' }}>
          <MiddlePagenationContainer>{`${(curPage - 1) * 20 + 1}-${
            curPage === pageCount ? totalCount : curPage * 20
          } / ${totalCount}개`}</MiddlePagenationContainer>
        </div>

        <MiddlePageContainer>
          <PageArrow onClick={() => handlePage(curPage - 1)}>
            <AiOutlineLeft />
          </PageArrow>
          <PageState>{`${curPage} / ${pageCount}`}</PageState>
          <PageArrow onClick={() => handlePage(curPage + 1)}>
            <AiOutlineRight />
          </PageArrow>
        </MiddlePageContainer>
      </MiddleContainer>
      <ProductContainer>
        {productList !== undefined &&
          productList.length !== 0 &&
          productList.map((product, idx) => createProductCard(product, idx))}
        {productList.length < 20 &&
          Array(4 - (productList.length % 4))
            .fill()
            .map(() => (
              <CardContainer>
                <ProductCardContainer></ProductCardContainer>
              </CardContainer>
            ))}
      </ProductContainer>
    </ShopContainer>
  );
}

export default NewProductList;
