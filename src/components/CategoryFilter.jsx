// src/components/CategoryFilter.js
import React from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const CategoryFilter = ({
  categories,
  selectedCategories,
  handleCategoryChange,
}) => {
  return (
    <FormControl component="fieldset">
      <FormGroup>
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                name={category}
              />
            }
            label={category}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CategoryFilter;

// src/components/ProductList.js