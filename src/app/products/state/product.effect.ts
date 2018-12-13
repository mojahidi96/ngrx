import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import * as productActions from "src/app/products/state/product.action";
import { ProductService } from "../Products.service";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.productActionType.ProductsLoaded),
    mergeMap(action =>
      this.productService.getProducts().pipe(
        map(products => new productActions.ProductsLoadSuccess(products)),
        catchError(err => of(new productActions.ProductsLoadFail(err)))
      )
    )
  );
}
