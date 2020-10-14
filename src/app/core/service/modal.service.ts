import { Injectable } from '@angular/core';
import { LoaderComponent } from '../../shared/loader/container/loader.component';
import { Observable, of } from 'rxjs';
import { PostModalComponent } from '../../shared/modal/post-modal/container/post-modal.component';
import { ViewModalComponent } from '../../shared/modal/view-modal/container/view-modal.component';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog/dynamicdialog-ref';
import { IPost } from '../model/post.model';

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

  openLoader (): Observable<DynamicDialogRef> {
    let dialog_ref;

    this.loader_counter += 1;

    if (this.loader_counter === 1) {
      dialog_ref = this.dialogService.open(LoaderComponent, {
        autoZIndex: true,
        baseZIndex: 10001,
        closable: false,
        contentStyle: { padding: '1.25rem' },
        dismissableMask: false,
        showHeader: false,
        style: { 'box-shadow': 'none' }
      });
    }

    return of(dialog_ref) as Observable<DynamicDialogRef>;
  }

  closeModal (dialog_ref: DynamicDialogRef): void {
    dialog_ref.close();
  }

  public closeLoader (dialog_ref: DynamicDialogRef): void {
    this.loader_counter -= 1;

    if (this.loader_counter === 0) {
      dialog_ref.destroy();
    }
  }
}
