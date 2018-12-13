import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styles: []
})
export class ProductListComponent implements OnInit {
  pageTitle = "Products";
  displayCode: boolean = true;
  @Input() products;
  selectedProduct: Product;
  constructor() {}

  ngOnInit() {
    console.log("product", this.products);
  }
  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
  check(event) {
    console.log(event.target.checked);
    this.displayCode = event.target.checked;
  }
}
