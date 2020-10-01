import { error, info, setLevel } from 'loglevel';
import { finalize, tap } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum E_HTTP_RESPONSE {
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

setLevel('INFO');

@Injectable({
  providedIn: 'root',
})
export class LoggerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqStarted = Date.now();
    let resStatus: string;

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => (resStatus = event instanceof HttpResponse ? E_HTTP_RESPONSE.SUCCEEDED : ''),
        (_: HttpErrorResponse) => (resStatus = E_HTTP_RESPONSE.FAILED),
      ),
      finalize(() => {
        const elapsedTime = Date.now() - reqStarted;
        const message = ` [${resStatus}] => ${request.method} "${request.urlWithParams}" in ${elapsedTime} ms`;
        resStatus === E_HTTP_RESPONSE.SUCCEEDED ? info(message) : error(message);
      }),
    );
  }
}
