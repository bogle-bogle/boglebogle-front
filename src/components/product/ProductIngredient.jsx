import React from 'react'
import {PiBoneLight} from 'react-icons/pi';
import { IngredientBanner, IngredientContainer, IngredientElement } from './detail.style';

function ProductIngredient({ingredients}) {
    
  return (
    <div>
      <IngredientBanner>
        <PiBoneLight style={{fontSize:"40px"}}/>
        <h2>{`전성분 ${ingredients.length}가지`}</h2>
      </IngredientBanner>
      <IngredientContainer>
        {ingredients.map((ing) => <IngredientElement>{ing}</IngredientElement>)}
      </IngredientContainer>
    </div>
  )
}

export default ProductIngredient
