import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/category.saga";

// generator function by using "function" and "*"
export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
