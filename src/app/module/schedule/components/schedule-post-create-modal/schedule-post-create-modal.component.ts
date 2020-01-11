// Core Modules
import { Component } from '@angular/core';

// Third Party Modules
import { MatDialogRef } from '@angular/material/dialog';
import { ScheduleFacade } from '../../facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-post-create-modal',
  templateUrl: './schedule-post-create-modal.component.html',
  styleUrls: ['./schedule-post-create-modal.component.scss']
})
export class SchedulePostCreateModalComponent {
  constructor(
    private scheduleFacade: ScheduleFacade,
    private eventCreateModalRef: MatDialogRef<SchedulePostCreateModalComponent>
  ) {
    this.scheduleFacade.getPostCreateModalObservable().subscribe(() => this.eventCreateModalRef.close());
  }

  onChooseTypeModalClosed(): void {}
}
