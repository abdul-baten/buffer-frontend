// Core Modules
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

// Third Party Modules
import * as Logger from 'loglevel';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

export class LoggerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqStarted = Date.now();
    let resStatus: string;

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => (resStatus = event instanceof HttpResponse ? 'succeeded' : ''),
        (_: HttpErrorResponse) => (resStatus = 'failed')
      ),
      finalize(() => {
        const elapsedTime = Date.now() - reqStarted;
        const message = `${req.method} "${req.urlWithParams}" ${resStatus} in ${elapsedTime} ms`;
        Logger.info({
          level: resStatus === 'failed' ? 'error' : 'info',
          message
        });
      })
    );
  }
}
