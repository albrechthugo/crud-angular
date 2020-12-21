import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { ActionButtonComponent } from 'src/app/components/buttons/action-button/action-button.component';
import { FooterComponent } from 'src/app/components/template/footer/footer.component';
import { HeaderComponent } from 'src/app/components/template/header/header.component';
import { MobileMenuComponent } from 'src/app/components/template/header/mobile-menu/mobile-menu.component';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ActionButtonComponent,
    FooterComponent,
    ValidationMessageComponent,
    MobileMenuComponent
  ],
    imports: [
        MatToolbarModule,
        MatCardModule,
        RouterModule,
    ],
  exports: [
    HeaderComponent,
    ActionButtonComponent,
    FooterComponent,
    ValidationMessageComponent,
    MobileMenuComponent
  ],
  providers: []
})

export class SharedModule {}
