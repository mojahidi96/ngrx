import { Product } from "../product";
import { productAction, productActionType } from "./product.action";

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}
const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ""
};
export function reducer(
  state = initialState,
  action: productAction
): ProductState {
  switch (action.type) {
    case productActionType.ProductsLoadSucces:
      return {
        ...state,
        products: action.payload,
        error: ""
      };
    case productActionType.ProductsLoadFail:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
