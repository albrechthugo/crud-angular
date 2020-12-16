import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    MatCardModule,
    RouterModule
  ],
  exports: [
    NotFoundComponent
  ],
  providers: []
})

export class ErrorsModule {}
