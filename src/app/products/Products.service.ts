import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, tap, catchError } from "rxjs/operators";
import { Product } from "./product";

@Injectable({ providedIn: "root" })
export class ProductService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http
      .get<Product[]>(`${this.baseUrl}products`)
      .pipe(tap(response => console.log(response)));
  }
}
