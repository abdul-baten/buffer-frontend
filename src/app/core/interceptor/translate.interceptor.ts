import { Inject } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import type { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { Request } from 'express';

export class TranslatorInterceptor implements HttpInterceptor {
  private readonly PORT = process.env.PORT;

  constructor (@Inject(REQUEST) private request: Request) {}

  private getBaseUrl (request: Request) {
    const { protocol, hostname } = request;

    return this.PORT ? `${protocol}://${hostname}:${this.PORT}` : `${protocol}://${hostname}`;
  }

  intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cloned_request;

    if (request.url.startsWith('./assets')) {
      const base_uri = this.getBaseUrl(this.request);

      cloned_request = request.clone({
        url: `${base_uri}/${request.url.replace('./assets', 'assets')}`
      });
    }

    return next.handle(cloned_request as HttpRequest<any>);
  }
}
