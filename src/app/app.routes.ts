import { Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {path:'',component:ProductViewComponent},
    {path:'product-details', component:ProductDetailsComponent}
];
