import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Product } from "../../product";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styles: []
})
export class ProductEditComponent implements OnInit, OnChanges {
  ProductId;
  pageTitle = "Product Edit";
  @Input() selectedProduct;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.ProductId = changes.selectedProduct.currentValue;

    this.displayProduct();
  }
  displayProduct(): any {
    if (this.ProductId === 0) {
      this.pageTitle = "Add Product";
    }
  }
}
