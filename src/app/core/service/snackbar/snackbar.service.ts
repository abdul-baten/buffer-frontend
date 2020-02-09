// Core Modules
import { Injectable } from '@angular/core';

// Third Party Modules
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      data: '',
      direction: 'ltr',
      duration: 2500,
      horizontalPosition: 'center',
      politeness: 'polite',
      verticalPosition: 'bottom',
    });
  }
}
