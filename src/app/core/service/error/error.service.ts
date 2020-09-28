import { HttpErrorResponse } from '@angular/common/http';
import { I_ERROR } from '@core/model';
import { Injectable } from '@angular/core';
import { NotificationService } from '../notification/notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private readonly notificationService: NotificationService, private router: Router) {}

  handleServerError(error: HttpErrorResponse): void {
    this.serverError(error.error);
  }

  private serverError(error: I_ERROR): void {
    console.clear();
    console.warn(error);

    const { errorCode, message } = error;

    this.notificationService.showError(message);

    switch (errorCode) {
      case '100':
      case '101':
        this.router.navigate(['/enter']);
        break;

      case '1000':
        this.router.navigate(['/connection/choose']);
        break;
    }
  }
}
