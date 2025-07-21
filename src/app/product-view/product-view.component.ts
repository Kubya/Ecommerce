import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../rest/api.service';
import { product } from '../rest/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
 
  isLoading = true;
  errorMessage = '';
  data: any|product[];
  apiService = inject(ApiService);

  constructor() {}

  ngOnInit(): void {
    this.displayProduct();
  }

  displayProduct(){
    this.apiService.getProduct('1', null).subscribe( res=>{
      this.data=res;    
    })
    // console.log(this.data);
  }
  addCart(item: product) {
    this.apiService.addToCart(item);
  }
  removeItem(item: product) {
   this.apiService.removeFromCart(item)
  }

}


