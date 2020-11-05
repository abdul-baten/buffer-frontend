import { Component, HostListener, OnDestroy } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostModalFacade } from '../facade/post-modal.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'buffer-post-modal',
  styleUrls: ['./post-modal.component.css'],
  templateUrl: './post-modal.component.html'
})
export class PostModalComponent implements OnDestroy {
  private subscription$ = new Subscription();
  public active_index = 0;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor (public post_info: DynamicDialogConfig, private readonly facade: PostModalFacade, public dialogRef: DynamicDialogRef) {
    this.subscription$.add(this.facade.setComposeInfo(post_info.data.post_info).subscribe());
  }

  public openTab (index: number): void {
    this.active_index = index;
  }

  public isDisabled (index: number): boolean {
    return this.active_index !== index;
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
