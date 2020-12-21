import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  
  constructor(private snackBar: MatSnackBar, private title: Title) {}

  changePageTitle(title: string): void {
    this.title.setTitle(title);
  }

  showConfirmationPopUp(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
