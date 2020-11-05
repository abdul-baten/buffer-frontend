import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {
  Inject,
  Injectable,
  Optional,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Observable } from 'rxjs';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor (@Optional() @Inject(REQUEST) private req: Request, @Inject(PLATFORM_ID) private readonly platformId: Object) {}
  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (isPlatformServer(this.platformId)) {
      const cloned_req = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          cookie: this.req.headers.cookie || ''
        }),
        responseType: 'json'
      });

      return next.handle(cloned_req);
    }

    const cloned_req = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'json',
      withCredentials: true
    });

    return next.handle(cloned_req);
  }
}
