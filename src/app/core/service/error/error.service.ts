import { fromError } from 'stacktrace-js';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { NotificationService } from '../notification/notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private snackbarService: NotificationService, private zone: NgZone, private router: Router) {}

  private getClientErrorMessage(error: Error): string {
    return error.message ? error.message : error.toString();
  }

  private getClientErrorStack(error: Error): string {
    fromError(error).then(console.warn);
    return error.stack;
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    return error.error.errorMessage ? error.error.errorMessage : error.toString();
  }

  private openSnackbar(message: string): void {
    this.zone.run(() => {
      this.snackbarService.openNotificationWithComponent(message);
    });
  }

  handleServerError(error: HttpErrorResponse): void {
    this.serverError(error);
    const message = this.getServerErrorMessage(error);
    this.openSnackbar(message);
  }

  handleClientError(error: Error): void {
    const message = this.getClientErrorMessage(error);
    const stackTrace = this.getClientErrorStack(error);

    console.warn(message, stackTrace);

    this.openSnackbar(message);
  }

  private serverError(error: HttpErrorResponse): void {
    const {
      error: { errorCode },
    } = error;

    this.zone.run(() => {
      switch (errorCode) {
        case '101':
          this.router.navigate(['/enter']);
          break;

        default:
          break;
      }
    });
  }
}
