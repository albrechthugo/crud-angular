import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ActionButtonComponent } from 'src/app/components/buttons/action-button/action-button.component';
import { EmptyCartComponent } from 'src/app/components/utils/empty-cart/empty-cart.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductLoadingComponent } from './product-loading/product-loading.component';

@NgModule({
  declarations: [
    CreateProductComponent,
    EditProductComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    ProductLoadingComponent,
    EmptyCartComponent,
    ActionButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    CreateProductComponent,
    EditProductComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    ProductLoadingComponent,
    EmptyCartComponent,
    ActionButtonComponent,
  ],
  providers: []
})

export class ProductModule {}