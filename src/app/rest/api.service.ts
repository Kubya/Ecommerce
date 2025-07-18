import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 constructor(private http: HttpClient) {}

 getProduct(id: string, string: any){
  return this.http.get<product[]>('https://dummyjson.com/products');
 }
getProductByid(id: string) {
  return this.http.get('https://dummyjson.com/products/'+id);
}

}