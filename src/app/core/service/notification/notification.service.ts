import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private messageService: MessageService) {}

  showSuccess(message: string): void {
    this.messageService.add({ severity: 'success', detail: message });
  }

  showInfo(message: string): void {
    this.messageService.add({ severity: 'info', detail: message });
  }

  showWarn(message: string): void {
    this.messageService.add({ severity: 'warn', detail: message });
  }

  showError(message: string): void {
    this.messageService.add({ severity: 'error', detail: message });
  }
}
