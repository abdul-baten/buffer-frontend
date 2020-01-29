import { Component, HostListener, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-create-modal',
  templateUrl: './post-create-modal.component.html',
  styleUrls: ['./post-create-modal.component.scss'],
})
export class PostCreateModalComponent implements OnDestroy {
  private subscriptions$ = new SubSink();

  constructor() {
    this.subscriptions$.add();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
