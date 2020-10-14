import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor (private readonly messageService: MessageService) {}

  showSuccess (message: string): void {
    if (message) {
      this.messageService.add({
        detail: message,
        severity: 'success',
        summary: 'Yay!'
      });
    }
  }

  showInfo (message: string): void {
    if (message) {
      this.messageService.add({
        detail: message,
        severity: 'info',
        summary: 'Yay!'
      });
    }
  }

  showWarn (message: string): void {
    if (message) {
      this.messageService.add({
        detail: message,
        severity: 'warn',
        summary: 'Yay!'
      });
    }
  }

  showError (message: string): void {
    if (message) {
      this.messageService.add({
        detail: message,
        severity: 'error',
        summary: 'Whoops!'
      });
    }
  }
}
