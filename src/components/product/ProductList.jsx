import * as Api from "../../api";
import React, { useEffect, useState } from "react";
import {
  CategoryContainer,
  CategoryElementContainer,
  CategoryP,
  FilterCategoryContainer,
  FilterCategoryRow,
  FilterCategoryTitle,
  InitialButton,
  MiddleCategoryContainer,
  MiddleCategoryElement,
  MiddleContainer,
  MiddlePageContainer,
  MiddlePagenationContainer,
  PageArrow,
  PageState,
  ProductCardContainer,
  ProductContainer,
} from "./index.style";
import { useNavigate } from "react-router-dom";
import CategoryFilterButton from "./CategoryFilterButton";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import {
  proteinCode,
  animalCode,
  productSub,
  shopCategory,
} from "../../commonCode";
import ProductCard from "./ProductCard";

function ProductList() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const [filterProductSub, setFilterProductSub] = useState([]);
  const [filterAnimal, setFilterAnimal] = useState([]);
  const [filterProtein, setFilterProtein] = useState([]);

  const [animalFilterCheck, setAnimalFilterCheck] = useState(() => {
    const newObj = {};
    Object.entries(animalCode).forEach(([key, value]) => {
      newObj[key] = false;
    });
    return newObj;
  });
  const [productSubFilterCheck, setProductSubFilterCheck] = useState(() => {
    const newObj = {};
    Object.entries(productSub).forEach(([key, value]) => {
      newObj[key] = false;
    });
    return newObj;
  });
  const [proteinFilterCheck, setProteinFilterCheck] = useState(() => {
    const newObj = {};
    Object.entries(proteinCode).forEach(([key, value]) => {
      newObj[key] = false;
    });
    return newObj;
  });

  useEffect(() => {
    Api.post(`/api/product/list/${curPage}`, {
      productSubFilter:
        filterProductSub.length !== 0
          ? filterProductSub
          : Object.entries(productSub).map(([key, value]) => key),
      animalFilter:
        filterAnimal.length !== 0
          ? filterAnimal
          : Object.entries(animalCode).map(([key, value]) => key),
      proteinFilter:
        filterProtein.length !== 0
          ? filterProtein
          : Object.entries(proteinCode).map(([key, value]) => key),
    }).then((res) => {
      setProductList(() => {
        const newProducts = [...res.data.products];
        return newProducts;
      });
      setTotalCount(res.data.count);
      let cnt = parseInt(res.data.count / 20);
      if (res.data.count % 20 > 0) {
        cnt += 1;
      }
      setPageCount(cnt);
    });
  }, [curPage, filterProductSub, filterAnimal, filterProtein]);

  function handlePage(page) {
    if (page === 0 || page > pageCount) {
      return;
    }
    setCurPage(page);
  }

  function handleAnimalFilter(id) {
    return () => {
      if (animalFilterCheck[id]) {
        setFilterAnimal((prev) => {
          return prev.filter((element) => element !== id);
        });
        setAnimalFilterCheck((prev) => {
          return { ...prev, [id]: false };
        });
      } else {
        setFilterAnimal((prev) => {
          return [...prev, id];
        });
        setAnimalFilterCheck((prev) => {
          return { ...prev, [id]: true };
        });
      }
    };
  }

  function handleProductSubFilter(id) {
    return () => {
      if (productSubFilterCheck[id]) {
        setFilterProductSub((prev) => {
          return prev.filter((element) => element !== id);
        });
        setProductSubFilterCheck((prev) => {
          return { ...prev, [id]: false };
        });
      } else {
        setFilterProductSub((prev) => {
          return [...prev, id];
        });
        setProductSubFilterCheck((prev) => {
          return { ...prev, [id]: true };
        });
      }
    };
  }

  function handleProteinFilter(id) {
    return () => {
      if (proteinFilterCheck[id]) {
        setFilterProtein((prev) => {
          return prev.filter((element) => element !== id);
        });
        setProteinFilterCheck((prev) => {
          return { ...prev, [id]: false };
        });
      } else {
        setFilterProtein((prev) => {
          return [...prev, id];
        });
        setProteinFilterCheck((prev) => {
          return { ...prev, [id]: true };
        });
      }
    };
  }

  function initialFilter() {
    setFilterProductSub([]);
    setFilterProtein([]);
    setFilterAnimal([]);

    setAnimalFilterCheck(() => {
      const newObj = {};
      Object.entries(animalCode).forEach(([key, value]) => {
        newObj[key] = false;
      });
      return newObj;
    });
    setProductSubFilterCheck(() => {
      const newObj = {};
      Object.entries(productSub).forEach(([key, value]) => {
        newObj[key] = false;
      });
      return newObj;
    });
    setProteinFilterCheck(() => {
      const newObj = {};
      Object.entries(proteinCode).forEach(([key, value]) => {
        newObj[key] = false;
      });
      return newObj;
    });
  }

  return (
    <div>
      <CategoryContainer>
        <CategoryP>{"SHOPPING  >  식품  >  강아지"}</CategoryP>
        <InitialButton onClick={initialFilter}>필터 초기화</InitialButton>
      </CategoryContainer>
      <FilterCategoryContainer>
        <FilterCategoryRow>
          <FilterCategoryTitle>대분류</FilterCategoryTitle>
          <CategoryElementContainer>
            {Object.entries(shopCategory).map(([key, value]) => (
              <CategoryFilterButton key={key + value} id={key}>
                {value}
              </CategoryFilterButton>
            ))}
          </CategoryElementContainer>
        </FilterCategoryRow>
        {/* <FilterCategoryRow>
          <FilterCategoryTitle>반려동물</FilterCategoryTitle>
          <CategoryElementContainer>
            {Object.entries(animalCode).map(([key, value]) => (
              <CategoryFilterButton
                key={key + value}
                id={key}
                handleFilter={handleAnimalFilter}
                isChecked={animalFilterCheck[key]}
              >
                {value}
              </CategoryFilterButton>
            ))}
          </CategoryElementContainer>
        </FilterCategoryRow>
        <FilterCategoryRow>
          <FilterCategoryTitle>연령대별 추천</FilterCategoryTitle>
          <CategoryElementContainer>
            {Object.entries(productSub).map(([key, value]) => (
              <CategoryFilterButton
                key={key + value}
                id={key}
                handleFilter={handleProductSubFilter}
                isChecked={productSubFilterCheck[key]}
              >
                {value}
              </CategoryFilterButton>
            ))}
          </CategoryElementContainer>
        </FilterCategoryRow>
        <FilterCategoryRow>
          <FilterCategoryTitle>주재료별 추천</FilterCategoryTitle>
          <CategoryElementContainer>
            {Object.entries(proteinCode).map(([key, value]) => (
              <CategoryFilterButton
                key={key + value}
                id={key}
                handleFilter={handleProteinFilter}
                isChecked={proteinFilterCheck[key]}
              >
                {value}
              </CategoryFilterButton>
            ))}
          </CategoryElementContainer>
        </FilterCategoryRow> */}
      </FilterCategoryContainer>
    </div>
  );
}

export default ProductList;
