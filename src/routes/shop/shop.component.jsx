import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* :category is basically created a variable named category that will contain the value that is nested within /shop/. We retrieve
      that value of category using useParams */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
