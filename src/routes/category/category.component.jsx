import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.components";

import { CategoryTitle, CategoryContainer } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {/* Only render products if products is defined. A safeguard as categoriesMap object is retrieved from an async function. */}
        {/* If you have components that rely on a async fetched code, then you need to put in safeguards
        so that you only render your components only if the actual data is present*/}
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
