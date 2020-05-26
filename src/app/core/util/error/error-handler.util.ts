import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorService } from '@core/service/error/error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandlerUtil implements ErrorHandler {
  constructor(private errorService: ErrorService) {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.errorService.handleServerError(error);
    }
  }
}
