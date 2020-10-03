import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private readonly messageService: MessageService) {}

  showSuccess(message: string): void {
    if (message) {
      this.messageService.add({ severity: 'success', summary: 'Yay!', detail: message });
    }
  }

  showInfo(message: string): void {
    if (message) {
      this.messageService.add({ severity: 'info', detail: message });
    }
  }

  showWarn(message: string): void {
    if (message) {
      this.messageService.add({ severity: 'warn', detail: message });
    }
  }

  showError(message: string): void {
    if (message) {
      this.messageService.add({ severity: 'error', summary: 'Whoops!', detail: message });
    }
  }
}
