// Core Modules
import { Component, OnDestroy, HostListener } from '@angular/core';

// Third Party Modules
import { SubSink } from 'subsink';
import { MatDialogRef } from '@angular/material/dialog';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-post-create-modal',
  templateUrl: './schedule-post-create-modal.component.html',
  styleUrls: ['./schedule-post-create-modal.component.scss']
})
export class SchedulePostCreateModalComponent implements OnDestroy {
  private subscriptions$ = new SubSink();

  constructor(
    private scheduleFacade: ScheduleFacade,
    private eventCreateModalRef: MatDialogRef<SchedulePostCreateModalComponent>
  ) {
    this.subscriptions$.add(
      this.scheduleFacade.getPostCreateModalObservable().subscribe(() => this.eventCreateModalRef.close())
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
