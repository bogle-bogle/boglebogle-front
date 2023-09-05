import React, { useState } from 'react';
import { CategoryElement } from './index.style';
import { FaCheck } from 'react-icons/fa';

function CategoryFilterButton({ children, addFilter, delFilter, id }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    if (!isChecked) {
      addFilter(id);
    } else {
      delFilter(id);
    }

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
