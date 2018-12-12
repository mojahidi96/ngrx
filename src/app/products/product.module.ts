import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ProductShellComponent } from "./container/product-shell/product-shell.component";

const routes: Routes = [{ path: "", component: ProductShellComponent }];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProductModule {}
