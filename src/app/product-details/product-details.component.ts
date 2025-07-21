import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { product } from '../rest/product.model';
import { ApiService } from '../rest/api.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
 productData: any|product;
 showAdd: boolean = true;
 showRemove: boolean = false;

constructor( 
    private api:ApiService,
    private activatedroute: ActivatedRoute
  ) {}
ngOnInit(): void {
  let productid = this.activatedroute.snapshot.paramMap.get('productid')
   productid && this.api.getProductByid(productid).subscribe((res: any) => {
    this.productData = res;
   });
}
addCart(productData: product) {
  this.showAdd = false;
  this.showRemove = true;
  this.api.addToCart(this.productData);
 
}
removeCart(productData: product) {
  this.showAdd = true;
  this.showRemove = false;
  this.api.removeFromCart(this.productData);
}


}




