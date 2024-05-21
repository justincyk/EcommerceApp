import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

// generators respond to action, they want to do something with it
// cannot have async/await in generators. Yield is the key for await for generators.
export function* fetchCategoriesAsync() {
  try {
    // call takes in a method to call and arguments needed for the method; Ex. call(getCategoriesAndDocument, 'categories')
    const categoriesArray = yield call(getCategoriesAndDocuments);
    // use put instead of dispatch to dispatch an action. put allows for effects and its the dispatch for Redux-Saga
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  // take is where we receive actions and take latests is if you hear a bunch of the same action, give
  // me the latest one
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  // All says that you can give me an array of different things that you are calling such as
  // functions or generators and it will wait until all of them finish before continuing
  yield all([call(onFetchCategories)]);
}
