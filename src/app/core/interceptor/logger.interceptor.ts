import { EHttpResponse } from '../enum';
import { error, info, setLevel } from 'loglevel';
import { finalize, tap } from 'rxjs/operators';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';

setLevel('INFO');

@Injectable({
  providedIn: 'root'
})
export class LoggerInterceptor implements HttpInterceptor {
  intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request_start = Date.now();
    let response_status: string;

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          response_status = event instanceof HttpResponse ? EHttpResponse.SUCCEEDED : '';
        },
        () => {
          response_status = EHttpResponse.FAILED;
        }
      ),
      finalize(() => {
        const request_time = Date.now() - request_start;
        const message = `[${response_status}] => ${request.method} "${request.urlWithParams}" in ${request_time} ms`;

        if (response_status === EHttpResponse.SUCCEEDED) {
          info(message);
        } else {
          error(message);
        }
      })
    );
  }
}
