// src/App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";
import { Grid, Box } from "@mui/material";
import productsData from "./data.json"; // Import the JSON file

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const categories = [
      ...new Set(productsData.products.map((product) => product.category)),
    ];
    setProducts(productsData.products);
    setCategories(categories);
  }, []);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category)
  );

  return (
    <div>
      <Navbar />
      <Box sx={{ display: "flex", p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CategoryFilter
              categories={categories}
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
            />
          </Grid>
          <Grid item xs={9}>
            <ProductList products={filteredProducts} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
