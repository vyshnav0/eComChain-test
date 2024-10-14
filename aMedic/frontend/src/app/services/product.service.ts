import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private apiUrl = 'http://localhost:3000/products';
  private apiUrl = 'https://ideal-disco-r5w6jpx6p4pc5q4r-3000.app.github.dev/products';

  constructor(private http: HttpClient) {}
  getProducts():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  // a new service for medicine details component
  getProductById(productId: string):Observable<any>{
    return this.http.get(`${this.apiUrl}/${productId}`);
  }

  // service used by add to cart
  updateProductStock(productId: string, newStock: number): Observable<any>{
    return this.http.patch(`${this.apiUrl}/${productId}`, {stock: newStock});
  }
}
