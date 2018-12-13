import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductEditComponent } from "./products/components/product-edit/product-edit.component";
import { ProductListComponent } from "./products/components/product-list/product-list.component";
import { ProductShellComponent } from "./products/container/product-shell/product-shell.component";
import { ProductModule } from "./products/product.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
@NgModule({
  declarations: [
    AppComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
