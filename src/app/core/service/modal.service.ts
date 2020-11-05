import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Injectable } from '@angular/core';
import { IPost } from '../model/post.model';
import { LoaderComponent } from '../../shared/loader/container/loader.component';
import { Observable, of } from 'rxjs';
import { PostModalComponent } from '../../shared/modal/post-modal/container/post-modal.component';
import { ViewModalComponent } from '../../shared/modal/view-modal/container/view-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private dialog_ref: DynamicDialogRef = new DynamicDialogRef();
  private loader_counter = 0;

  constructor (private readonly dialogService: DialogService) {}

  public openPostModal (post_info: Partial<IPost>): void {
    this.dialogService.open(PostModalComponent, {
      contentStyle: {
        height: '100%',
        overflow: 'auto'
      },
      data: { post_info },
      header: 'Compose new post',
      height: 'auto',
      showHeader: true,
      width: '580px'
    });
  }

  public openViewModal (header: string, post_info: Partial<IPost>): DynamicDialogRef {
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

  public openLoader (): Observable<DynamicDialogRef> {
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
