import { ComponentRef, Injectable } from '@angular/core';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { I_POST } from '@core/model';
import { LoaderComponent } from '@shared/module/loader/container/loader.component';
import { Observable, of } from 'rxjs';
import { PostModalComponent } from '@shared/module/modal/post-modal/container/post-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private loaderCounter = 0;
  private dialogRef: DynamicDialogRef;

  constructor(private dialogService: DialogService) {}

  openPostModal(header: string, postData: Partial<I_POST>): DynamicDialogRef {
    this.dialogRef = this.dialogService.open(PostModalComponent, {
      header,
      width: '550px',
      contentStyle: { 'max-height': '650px', overflow: 'auto' },
      data: {
        postData,
      },
    });

    return this.dialogRef;
  }

  openLoader(): Observable<ComponentRef<DynamicDialogComponent>> {
    this.loaderCounter++;

    if (this.loaderCounter === 1) {
      this.dialogService.open(LoaderComponent, {
        autoZIndex: true,
        baseZIndex: 10001,
        closable: false,
        contentStyle: { background: 'transparent' },
        dismissableMask: false,
        modal: true,
        style: { 'box-shadow': 'none' },
      });
    }

    return of(this.dialogService.dialogComponentRef);
  }

  closeLoader(dialogRef: ComponentRef<DynamicDialogComponent>) {
    this.loaderCounter--;

    if (this.loaderCounter === 0) {
      dialogRef.destroy();
    }
  }
}
