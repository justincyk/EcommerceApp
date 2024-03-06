import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Dispatch } from "redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  console.log("shop component rendering");

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
    console.log("categories map fetched");
  }, []);

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
