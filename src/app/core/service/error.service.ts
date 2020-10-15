import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IError } from '../model';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor (private readonly notificationService: NotificationService, private readonly router: Router) {}

  public handleServerError (error: HttpErrorResponse): void {
    this.serverError(error.error);
  }

  private serverError (error: IError): void {
    const { error_code, message } = error;

    this.notificationService.showError(message);

    switch (error_code) {
    case Number.parseInt('100', 10):
    case Number.parseInt('101', 10):
      this.router.navigate(['/enter']);
      break;

    case Number.parseInt('1500', 10):
      this.notificationService.showError(message);
      this.router.navigate(['/connection/choose']);
      break;

    default:
      break;
    }
  }
}
