import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductViewComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}

export { ProductViewComponent };
