import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { NotificationService } from '../notification/notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private snackbarService: NotificationService, private zone: NgZone, private router: Router) {}

  private getServerErrorMessage(error: HttpErrorResponse): string {
    return error.error.errorMessage ? error.error.errorMessage : error.toString();
  }

  openSnackbar(message: string): void {
    this.zone.run(() => {
      this.snackbarService.openNotificationWithComponent(message);
    });
  }

  handleServerError(error: HttpErrorResponse): void {
    this.serverError(error);
    const message = this.getServerErrorMessage(error);
    this.openSnackbar(message);
  }

  private serverError(error: HttpErrorResponse): void {
    const {
      error: { errorCode },
    } = error;

    this.zone.run(() => {
      switch (errorCode) {
        case '100':
        case '101':
          this.router.navigate(['/enter']);
          break;

        case '1000':
          this.router.navigate(['/connection/choose']);
          break;
      }
    });
  }
}
