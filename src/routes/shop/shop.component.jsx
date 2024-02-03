import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Dispatch } from "redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
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
