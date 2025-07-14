import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

 constructor(private http: HttpClient) {}

 getProduct(){
  return this.http.get<product[]>('http://dummyjson.com/products');
 }
}
