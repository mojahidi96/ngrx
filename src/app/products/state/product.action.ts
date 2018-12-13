import { Action } from "@ngrx/store";
import { Product } from "../product";
export enum productActionType {
  ProductsLoaded = "[Product] Load",
  ProductsLoadSucces = "[Product] Load Success",
  ProductsLoadFail = "[Product] Load Fail"
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
export type productAction =
  | ProductsLoad
  | ProductsLoadSuccess
  | ProductsLoadFail;
