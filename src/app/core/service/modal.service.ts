import { ComponentRef, Injectable } from '@angular/core';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { I_POST } from '../model/post.model';
import { LoaderComponent } from '../../shared/loader/container/loader.component';
import { Observable, of } from 'rxjs';
import { PostModalComponent } from '../../shared/modal/post-modal/container/post-modal.component';
import { ViewModalComponent } from '../../shared/modal/view-modal/container/view-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private loaderCounter = 0;

  constructor(private dialogService: DialogService) {}

  openPostModal(_header: string, postData: Partial<I_POST>): DynamicDialogRef {
    const dialogRef = this.dialogService.open(PostModalComponent, {
      showHeader: false,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto', height: '100%' },
      data: {
        postData,
      },
    });

    return dialogRef;
  }

  openViewModal(header: string, postData: Partial<I_POST>): DynamicDialogRef {
    const dialogRef = this.dialogService.open(ViewModalComponent, {
      header,
      width: '550px',
      contentStyle: { 'max-height': '650px', overflow: 'auto' },
      data: {
        postData,
      },
    });

    return dialogRef;
  }

  openLoader(): Observable<ComponentRef<DynamicDialogComponent>> {
    this.loaderCounter++;

    if (this.loaderCounter === 1) {
      this.dialogService.open(LoaderComponent, {
        autoZIndex: true,
        baseZIndex: 10000,
        closable: false,
        contentStyle: { background: 'transparent' },
        dismissableMask: false,
        style: { 'box-shadow': 'none' },
      });
    }

    return of(this.dialogService.dialogComponentRef);
  }

  closeModal(dialogRef: DynamicDialogRef): void {
    dialogRef.close();
  }

  closeLoader(dialogRef: ComponentRef<DynamicDialogComponent>) {
    this.loaderCounter--;

    if (this.loaderCounter === 0) {
      dialogRef.destroy();
    }
  }
}
