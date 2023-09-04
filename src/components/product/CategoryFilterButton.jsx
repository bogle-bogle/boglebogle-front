import React, { useState } from 'react';
import { CategoryElement } from './index.style';
import { FaCheck } from 'react-icons/fa';

function CategoryFilterButton({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked((prev) => {
      return !prev;
    });
  };

  return (
    <CategoryElement onClick={handleChecked} isChecked={isChecked}>
      {children}
      {isChecked && <FaCheck />}
    </CategoryElement>
  );
}

export default CategoryFilterButton;
