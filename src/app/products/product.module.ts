import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ProductShellComponent } from "./container/product-shell/product-shell.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/product.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ProductEffect } from "./state/product.effect";

const routes: Routes = [{ path: "", component: ProductShellComponent }];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    StoreModule.forFeature("products1", reducer),
    EffectsModule.forFeature([ProductEffect])
  ]
})
export class ProductModule {}
