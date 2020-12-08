import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = "http://localhost:4201/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  deleteProduct(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url);
  }

  editProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product);
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  showConfirmationPopUp(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
