import { fromError } from 'stacktrace-js';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { NotificationService } from '../notification/notification.service';
// import * as stackTraceParser from 'stacktrace-parser';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private snackbarService: NotificationService, private zone: NgZone) {}

  private getClientErrorMessage(error: Error): string {
    return error.message ? error.message : error.toString();
  }

  private getClientErrorStack(error: Error): string {
    fromError(error).then(console.warn);
    return error.stack;
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    return !navigator.onLine
      ? 'No internet connection!'
      : error.error.errorMessage
      ? error.error.errorMessage
      : error.toString();
  }

  private openSnackbar(message: string): void {
    this.zone.run(() => {
      this.snackbarService.openNotificationWithComponent(message);
    });
  }

  handleServerError(error: HttpErrorResponse): void {
    const message = this.getServerErrorMessage(error);
    this.openSnackbar(message);
  }

  handleClientError(error: Error): void {
    const message = this.getClientErrorMessage(error);
    const stackTrace = this.getClientErrorStack(error);

    console.warn(message, stackTrace);

    this.openSnackbar(message);
  }
}
