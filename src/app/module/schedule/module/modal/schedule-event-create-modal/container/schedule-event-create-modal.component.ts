// Core Modules
import { Component } from '@angular/core';

// Third Party Modules
import { MatDialogRef } from '@angular/material/dialog';

// Facades
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-event-create-modal',
  templateUrl: './schedule-event-create-modal.component.html',
  styleUrls: ['./schedule-event-create-modal.component.scss']
})
export class ScheduleEventCreateModalComponent {
  constructor(
    private scheduleFacade: ScheduleFacade,
    private eventCreateModalRef: MatDialogRef<ScheduleEventCreateModalComponent>
  ) {}

  onChooseTypeModalClosed(): void {
    this.eventCreateModalRef.close();
    this.eventCreateModalRef.afterClosed().subscribe(_ => {
      this.scheduleFacade.setDefaultPostData();
    });
  }
}
