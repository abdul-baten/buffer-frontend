import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

export class TranslatorInterceptor implements HttpInterceptor {
  private readonly PORT = process.env.PORT || 5000;

  constructor(@Inject(REQUEST) private request: Request) {}

  getBaseUrl(request: Request) {
    const { protocol, hostname } = request;
    return this.PORT ? `${protocol}://${hostname}:${this.PORT}` : `${protocol}://${hostname}`;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('./assets')) {
      const baseUrl = this.getBaseUrl(this.request);
      request = request.clone({
        url: `${baseUrl}/${request.url.replace('./assets', 'assets')}`,
      });
    }
    return next.handle(request);
  }
}
