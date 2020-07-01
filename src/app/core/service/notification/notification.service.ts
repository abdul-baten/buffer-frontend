import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '@shared/module/notification/container/notification.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      data: '',
      direction: 'ltr',
      duration: 2500,
      horizontalPosition: 'center',
      politeness: 'polite',
      verticalPosition: 'bottom',
      panelClass: ['buffer--simple-notification'],
    });
  }

  openNotificationWithComponent(notificationInfo: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: notificationInfo,
      direction: 'ltr',
      duration: 2500,
      horizontalPosition: 'start',
      politeness: 'polite',
      verticalPosition: 'bottom',
      panelClass: ['buffer--advance-notification'],
    });
  }
}
