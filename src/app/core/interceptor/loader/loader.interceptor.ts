import { ComponentRef, Injectable } from '@angular/core';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { finalize, switchMap } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ModalService } from '@core/service/modal/modal.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private modalService: ModalService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.modalService.openLoader().pipe(
      switchMap((ref: ComponentRef<DynamicDialogComponent>) => {
        return next.handle(req).pipe(
          finalize(() => {
            this.modalService.closeLoader(ref);
          }),
        );
      }),
    );
  }
}
