import { ComponentRef, Injectable } from '@angular/core';
import { LoaderComponent } from '../../shared/loader/container/loader.component';
import { Observable, of } from 'rxjs';
import { PostModalComponent } from '../../shared/modal/post-modal/container/post-modal.component';
import { ViewModalComponent } from '../../shared/modal/view-modal/container/view-modal.component';
import type { DialogService } from 'primeng/dynamicdialog';
import type { DynamicDialogComponent } from 'primeng/dynamicdialog/dynamicdialog';
import type { DynamicDialogRef } from 'primeng/dynamicdialog/dynamicdialog-ref';
import type { IPost } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private loader_counter = 0;

  constructor (private readonly dialogService: DialogService) {}

  openPostModal (post_info: Partial<IPost>): DynamicDialogRef {
    const dialog_ref = this.dialogService.open(PostModalComponent, {
      contentStyle: {
        height: '100%',
        overflow: 'auto'
      },
      data: { post_info },
      height: '100%',
      showHeader: false,
      width: '100%'
    });

    return dialog_ref;
  }

  openViewModal (header: string, post_info: Partial<IPost>): DynamicDialogRef {
    const dialog_ref = this.dialogService.open(ViewModalComponent, {
      contentStyle: {
        'max-height': '650px',
        overflow: 'auto'
      },
      data: { post_info },
      header,
      width: '550px'
    });

    return dialog_ref;
  }

  openLoader (): Observable<ComponentRef<DynamicDialogComponent>> {
    this.loader_counter += 1;

    if (this.loader_counter === 1) {
      this.dialogService.open(LoaderComponent, {
        autoZIndex: true,
        baseZIndex: 10001,
        closable: false,
        contentStyle: { padding: '1.25rem' },
        dismissableMask: false,
        showHeader: false,
        style: { 'box-shadow': 'none' }
      });
    }

    return of(this.dialogService.dialogComponentRefMap);
  }

  closeModal (dialog_ref: DynamicDialogRef): void {
    dialog_ref.close();
  }

  closeLoader (dialog_ref: ComponentRef<DynamicDialogComponent>) {
    this.loader_counter -= 1;

    if (this.loader_counter === 0) {
      dialog_ref.destroy();
    }
  }
}
