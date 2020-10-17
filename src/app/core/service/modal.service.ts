import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Injectable } from '@angular/core';
import { IPost } from '../model/post.model';
import { LoaderComponent } from '../../shared/loader/container/loader.component';
import { PostModalComponent } from '../../shared/modal/post-modal/container/post-modal.component';
import { ViewModalComponent } from '../../shared/modal/view-modal/container/view-modal.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private loader_counter = 0;

  private dialog_ref: DynamicDialogRef = new DynamicDialogRef();

  constructor (private readonly dialogService: DialogService) {}

  openPostModal (post_info: Partial<IPost>): DynamicDialogRef {
    this.dialog_ref = this.dialogService.open(PostModalComponent, {
      contentStyle: {
        height: '100%',
        overflow: 'auto'
      },
      data: { post_info },
      height: '100%',
      showHeader: false,
      width: '100%'
    });

    return this.dialog_ref;
  }

  openViewModal (header: string, post_info: Partial<IPost>): DynamicDialogRef {
    this.dialog_ref = this.dialogService.open(ViewModalComponent, {
      contentStyle: {
        'max-height': '650px',
        overflow: 'auto'
      },
      data: { post_info },
      header,
      width: '550px'
    });

    return this.dialog_ref;
  }

  openLoader (): Observable<DynamicDialogRef> {
    this.loader_counter += 1;

    if (this.loader_counter === 1) {
      this.dialog_ref = this.dialogService.open(LoaderComponent, {
        autoZIndex: true,
        baseZIndex: 10001,
        closable: false,
        contentStyle: { padding: '1.25rem' },
        dismissableMask: false,
        showHeader: false,
        style: { 'box-shadow': 'none' }
      });
    }

    return of(this.dialog_ref);
  }

  public closeLoader (dialog_ref: DynamicDialogRef): void {
    this.loader_counter -= 1;

    if (this.loader_counter === 0) {
      dialog_ref.destroy();
    }
  }
}
