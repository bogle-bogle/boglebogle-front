import React from 'react';
import { GiDogBowl } from 'react-icons/gi';
import {
  IngredientBanner,
  IngredientContainer,
  IngredientElement,
} from './detail.style';

function ProductIngredient({ ingredients }) {
  return (
    <div>
      <IngredientBanner>
        <GiDogBowl style={{ fontSize: '25px' }} />
        <p>{`전성분 ${ingredients.length}가지`}</p>
      </IngredientBanner>
      <IngredientContainer>
        {ingredients.map(ing => (
          <IngredientElement>{ing}</IngredientElement>
        ))}
      </IngredientContainer>
    </div>
  );
}

export default ProductIngredient;
