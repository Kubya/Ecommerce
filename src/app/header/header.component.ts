import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../rest/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cartCount: number = 0;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.products().subscribe(res => {
      this.cartCount =  res.length;
      console.log('Cart count:', this.cartCount);
    });
  }

}

