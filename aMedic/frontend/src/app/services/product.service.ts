import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products'

  constructor(private http: HttpClient) {}
  getProducts():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  // a new service for medicine details component
  getProductById(productId: string):Observable<any>{
    return this.http.get(`${this.apiUrl}/${productId}`);
  }
}
