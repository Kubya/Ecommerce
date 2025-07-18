import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { product } from '../rest/product.model';
import { ApiService } from '../rest/api.service';
import { get } from 'http';



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productData: any|product

  constructor( 
    private api:ApiService,
    private activatedroute: ActivatedRoute
  ) {}
ngOnInit(): void {
  let productid = this.activatedroute.snapshot.paramMap.get('productid')
  console.log('product id ',productid);
   productid && this.api.getProductByid(productid).subscribe((res: any) => {
    this.productData = res;
    console.log( 'response data',this.productData);
   });
}
}




