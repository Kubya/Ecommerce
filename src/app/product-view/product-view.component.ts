import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../rest/api.service';
import { product } from '../rest/product.model';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers:[ApiService]   
})
export class ProductViewComponent implements OnInit {
 
  isLoading = true;
  errorMessage = '';
  data: any|product[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.displayProduct();
  }

  displayProduct(){
    this.apiService.getProduct().subscribe( res=>{
    this.data=res;    
    })
    console.log(this.data);
  }
}


