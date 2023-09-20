import React from "react";
import { CategoryElement } from "./index.style";
import { FaCheck } from "react-icons/fa";

function CategoryFilterButton({ children, isChecked, id, handleFilter }) {
  return (
    <CategoryElement key={id} onClick={handleFilter} isChecked={isChecked}>
      {children}
      {isChecked && <FaCheck />}
    </CategoryElement>
  );
}

export default CategoryFilterButton;
