import { ProductState } from "./product.reducer";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export interface State {
  products: ProductState;
}
const getProductFeatureState = createFeatureSelector<ProductState>("products1");
export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const apiFail = createSelector(
  getProductFeatureState,
  state => state.error
);

export const getProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const addNewProduct = createSelector(
  getProductFeatureState,
  state => state.currentProductId
);
