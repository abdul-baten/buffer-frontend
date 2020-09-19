import * as Logger from 'loglevel';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqStarted = Date.now();
    let resStatus: string;

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => (resStatus = event instanceof HttpResponse ? 'succeeded' : ''),
        (_: HttpErrorResponse) => (resStatus = 'failed'),
      ),
      finalize(() => {
        const elapsedTime = Date.now() - reqStarted;
        const message = `${request.method} "${request.urlWithParams}" ${resStatus} in ${elapsedTime} ms`;
        Logger.info({
          level: resStatus === 'failed' ? 'error' : 'info',
          message,
        });
      }),
    );
  }
}
