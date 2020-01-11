// Core Module
import { Component, Inject } from '@angular/core';

// Third Party Module
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-delete-post-modal',
  templateUrl: './schedule-delete-post-modal.component.html',
  styleUrls: ['./schedule-delete-post-modal.component.scss']
})
export class ScheduleDeletePostModalComponent {
  constructor(
    private scheduleFacade: ScheduleFacade,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private matDialogRef: MatDialogRef<ScheduleDeletePostModalComponent>
  ) {}

  onDeletePostModalClosed(): void {
    this.matDialogRef.close();
    this.matDialogRef.afterClosed().subscribe(_ => this.scheduleFacade.openSnackbar('Post deleted', 'Ok'));
  }
}
