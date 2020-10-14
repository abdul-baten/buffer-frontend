import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../service';

@Injectable()
export class GlobalErrorHandlerUtil implements ErrorHandler {
  constructor (private readonly errorService: ErrorService) {}

  public handleError (error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      this.errorService.handleServerError(error);
    } else {
      console.warn(error);
    }
  }
}
