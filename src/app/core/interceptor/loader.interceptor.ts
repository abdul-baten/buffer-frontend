import { finalize, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ModalService } from '../service/modal.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {
  constructor (private readonly modalService: ModalService) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.modalService.openLoader().pipe(switchMap((dialog_ref: DynamicDialogRef) => next.handle(req).pipe(finalize(() => {
      this.modalService.closeLoader(dialog_ref);
    }))));
  }
}
