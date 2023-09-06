import React from 'react';
import { CategoryElement } from './index.style';
import { FaCheck } from 'react-icons/fa';

function CategoryFilterButton({ children, isChecked, id, handleFilter }) {
  return (
    <CategoryElement
      key={id + children}
      onClick={handleFilter(id)}
      isChecked={isChecked}
    >
      {children}
      {isChecked && <FaCheck onClick={handleFilter(id)} />}
    </CategoryElement>
  );
}

export default CategoryFilterButton;
