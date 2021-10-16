import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path:'products', component: ProductListComponent},
  { path:'products/:id', component: ProductDetailComponent},
  { path:'welcome', component: WelcomeComponent},
  { path:'', redirectTo:'welcome', pathMatch: 'full'},
  { path: '**', redirectTo:'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
