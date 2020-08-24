import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from 'primeng/api';
import { NotificationComponent } from '@shared/module/notification/container/notification.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar, private messageService: MessageService) {}

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

  showSuccess(message: string): void {
    this.messageService.add({ severity: 'success', detail: message, life: 5000 });
  }

  showInfo(message: string): void {
    this.messageService.add({ severity: 'info', detail: message, life: 5000 });
  }

  showWarn(message: string): void {
    this.messageService.add({ severity: 'warn', detail: message, life: 5000 });
  }

  showError(message: string): void {
    this.messageService.add({ severity: 'error', detail: message, life: 5000 });
  }
}
