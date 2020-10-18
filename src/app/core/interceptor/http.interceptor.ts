import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor (@Optional() @Inject(REQUEST) private req: Request) {}
  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Cookie: this.req.headers.cookie || ''
    });

    const cloned_req = request.clone({
      headers,
      responseType: 'json',
      withCredentials: true
    });

    return next.handle(cloned_req);
  }
}
