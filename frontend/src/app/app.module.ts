import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from './modules/product/product.module';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ErrorsModule } from './modules/errors/errors.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    SharedModule,
    ErrorsModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
