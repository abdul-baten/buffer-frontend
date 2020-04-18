import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@core/service/error/error.service';

@Injectable()
export class GlobalErrorHandlerUtil implements ErrorHandler {
  constructor(private errorService: ErrorService) {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.errorService.handleServerError(error);
    } else {
      this.errorService.handleClientError(error);
    }
  }
}
