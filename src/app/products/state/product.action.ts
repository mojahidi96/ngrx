import { Action } from "@ngrx/store";
import { Product } from "../product";
export enum productActionType {
  ProductsLoaded = "[Product] Load",
  ProductsLoadSucces = "[Product] Load Success",
  ProductsLoadFail = "[Product] Load Fail",
  ToggleProductCode = "[Product] Toggle Product Code",
  AddNewProduct = "[Product] Add New Product"
}
export class ToggleProductCode implements Action {
  readonly type = productActionType.ToggleProductCode;
  constructor(public payload: boolean) {}
}
export class ProductsLoad implements Action {
  readonly type = productActionType.ProductsLoaded;
}
export class ProductsLoadSuccess implements Action {
  readonly type = productActionType.ProductsLoadSucces;
  constructor(public payload: Product[]) {}
}
export class ProductsLoadFail implements Action {
  readonly type = productActionType.ProductsLoadFail;
  constructor(public payload: string) {}
}
export class AddNewProduct implements Action {
  readonly type = productActionType.AddNewProduct;
  constructor(public payload: number) {}
}
export type productAction =
  | ProductsLoad
  | ProductsLoadSuccess
  | ProductsLoadFail
  | ToggleProductCode
  | AddNewProduct;
