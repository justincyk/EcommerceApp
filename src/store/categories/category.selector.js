import { createSelector } from "reselect";
import { categoriesReducer } from "./category.reducer";

const selectCategoryReducer = (state) => {
  console.log(state.categories);
  return state.categories;
};

// createSelector from the reselect library allows us to memoize the result
// so that the funct`ion will only rerun if the input had changed
export const selectCategories = createSelector(
  // we can store multiple selectors in the [], Ex. [selectCategoryReducer, selectCurrentUser]
  [selectCategoryReducer],
  // output from selectCategoryReducer will be the value of categoriesSlice
  // if we had 2 arguments within the [], there would be a second argument within the () that stores the value
  // of the second output
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
