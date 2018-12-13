import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as fromState from "../../state";
import { ProductsLoad } from "../../state/product.action";
import { Observable } from "rxjs";
import { Product } from "../../product";

@Component({
  selector: "app-product-shell",
  templateUrl: "./product-shell.component.html",
  styles: []
})
export class ProductShellComponent implements OnInit {
  error: any;
  constructor(private store: Store<fromState.State>) {}
  products$: Observable<Product[]>;
  ngOnInit() {
    this.store.dispatch(new ProductsLoad());
    this.products$ = this.store.pipe(select(fromState.getProducts));
    this.store
      .pipe(select(fromState.apiFail))
      .subscribe(resp => (this.error = resp["message"]));
  }
}
