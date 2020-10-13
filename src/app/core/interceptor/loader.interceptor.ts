import { ComponentRef, Injectable } from '@angular/core';
import type { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { finalize, switchMap } from 'rxjs/operators';
import type { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import type { ModalService } from '../service/modal.service';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {
  constructor (private readonly modalService: ModalService) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.modalService.openLoader().pipe(switchMap((ref: ComponentRef<DynamicDialogComponent>) => next.handle(req).pipe(finalize(() => {
      this.modalService.closeLoader(ref);
    }))));
  }
}
