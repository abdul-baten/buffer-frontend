import { HttpErrorResponse } from '@angular/common/http';
import { I_ERROR } from '../model';
import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private readonly notificationService: NotificationService, private readonly router: Router) {}

  handleServerError(error: HttpErrorResponse): void {
    this.serverError(error.error);
  }

  private serverError(error: I_ERROR): void {
    const { errorCode, message } = error;

    this.notificationService.showError(message);

    switch (errorCode) {
      case 100:
      case 101:
        this.router.navigate(['/enter']);
        break;

      case 1500:
        this.notificationService.showError(message);
        this.router.navigate(['/connection/choose']);
        break;
    }
  }
}
