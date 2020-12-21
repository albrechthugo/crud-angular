import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { EmptyCartComponent } from 'src/app/components/utils/empty-cart/empty-cart.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductLoadingComponent } from './product-loading/product-loading.component';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { ShowProductComponent } from 'src/app/pages/show-product/show-product.component';

@NgModule({
  declarations: [
    CreateProductComponent,
    EditProductComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    ProductLoadingComponent,
    EmptyCartComponent,
    HomeComponent,
    ProductsComponent,
    ShowProductComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateProductComponent,
    EditProductComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    ProductLoadingComponent,
    EmptyCartComponent,
    HomeComponent,
    ProductsComponent,
    ShowProductComponent,
  ],
  providers: []
})

export class ProductModule {}
