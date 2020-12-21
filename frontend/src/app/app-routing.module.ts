import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShowProductComponent } from "./pages/show-product/show-product.component";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GetProductsResolver } from './modules/product/resolvers/get-products.resolver'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent,
    resolve: { products: GetProductsResolver }
  },
  {
    path: "product/:id",
    component: ShowProductComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
