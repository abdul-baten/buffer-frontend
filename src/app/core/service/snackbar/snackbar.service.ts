// Core Modules
import { Injectable } from '@angular/core';

// Third Party Modules
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string = 'Close') {
    this.snackBar.open(message, action, {
      data: '',
      duration: 5000,
      direction: 'ltr',
      politeness: 'polite',
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
}
