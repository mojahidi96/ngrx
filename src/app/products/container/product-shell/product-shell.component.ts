import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as fromState from "../../state";
import * as productActions from "../../state/product.action";
import { Observable } from "rxjs";
import { Product } from "../../product";

@Component({
  selector: "app-product-shell",
  templateUrl: "./product-shell.component.html",
  styles: []
})
export class ProductShellComponent implements OnInit {
  error: any;
  displayCode$: Observable<boolean>;
  newAddProduct$: Observable<number>;
  constructor(private store: Store<fromState.State>) {}
  products$: Observable<Product[]>;
  ngOnInit() {
    this.store.dispatch(new productActions.ProductsLoad());
    this.products$ = this.store.pipe(select(fromState.getProducts));
    this.store
      .pipe(select(fromState.apiFail))
      .subscribe(resp => (this.error = resp["message"]));
    this.displayCode$ = this.store.pipe(select(fromState.getProductCode));
    this.newAddProduct$ = this.store.pipe(select(fromState.addNewProduct));
  }

  changeChecked($event) {
    this.store.dispatch(new productActions.ToggleProductCode($event));
  }
  addNewProduct() {
    this.store.dispatch(new productActions.AddNewProduct(0));
  }
}
