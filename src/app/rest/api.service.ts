import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static removeFromCart(productData: any) {
    throw new Error('Method not implemented.');
  }
  static addToCart(productData: any) {
    throw new Error('Method not implemented.');
  }
private cartItem: any = [];
private productItem = new BehaviorSubject<any>([]);

 constructor(private http: HttpClient) {}

 getProduct(id: string, string: any){
  return this.http.get<product[]>('https://dummyjson.com/products');
 }
getProductByid(id: string) {
  return this.http.get('https://dummyjson.com/products/'+id);
}
addToCart(data: product) {
  this.cartItem.push(data);
  this.productItem.next(this.cartItem);
  console.log('Product added to cart:', data);
}
products() {
  return this.productItem.asObservable();
}
removeFromCart(item: product) {
  this.cartItem = this.cartItem.filter((cartItem: product) => cartItem.id !== item.id);
  this.productItem.next(this.cartItem);
  console.log('Item removed from cart:', item);
}

}