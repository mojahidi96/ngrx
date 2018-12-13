import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../product";
import { checkAndUpdateDirectiveDynamic } from "@angular/core/src/view/provider";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styles: []
})
export class ProductListComponent implements OnInit {
  pageTitle = "Products";
  @Input() displayCode: boolean;
  @Input() products;
  @Output() addProduct = new EventEmitter<Product>();
  selectedProduct: Product;
  @Output() checked = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {
    console.log("product", this.products);
  }
  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
  check(event) {
    console.log(event.target.checked);
    // this.displayCode = event.target.checked;
    this.checked.emit(event.target.checked);
  }
  newProduct() {
    this.addProduct.emit();
  }
}
