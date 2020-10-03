import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorService } from '../service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandlerUtil implements ErrorHandler {
  constructor(private readonly errorService: ErrorService) {}

  handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      this.errorService.handleServerError(error);
    } else {
      console.warn(error);
    }
  }
}
