import { HttpErrorResponse } from '@angular/common/http';
import { IError } from '../model';
import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor (
    private readonly notificationService: NotificationService,
    private readonly router: Router
  ) { }

  public handleClientError (error: Error): void {
    console.warn(error);
  }

  public handleServerError (error: HttpErrorResponse): void {
    console.warn(error);

    this.serverError(error.error);
  }

  private serverError (error: IError): void {
    const { error_code, message } = error;

    switch (error_code) {
    case Number.parseInt('100', 10):
    case Number.parseInt('101', 10):
    case Number.parseInt('1101', 10):
      this.router.navigate(['/enter']);
      break;

    case Number.parseInt('1500', 10):
      this.notificationService.showError(message);
      // This.router.navigate(['/connection/choose']);
      break;

    default:
      this.notificationService.showError(message);
      break;
    }
  }
}
