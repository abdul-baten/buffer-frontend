// Core Module
import { Component, Inject } from '@angular/core';

// Third Party Module
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'buffer--schedule-event-view-modal',
  templateUrl: './schedule-event-view-modal.component.html',
  styleUrls: ['./schedule-event-view-modal.component.scss']
})
export class ScheduleEventViewModalComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private matBottomSheetRef: MatBottomSheetRef<ScheduleEventViewModalComponent>
  ) {
    console.warn('============= console.warn starts =============');
    console.warn(this.matBottomSheetRef);
    console.warn(this.data);
    console.warn('============= console.warn ends =============');
  }

  onBottomSheetClosed(): void {
    this.matBottomSheetRef.dismiss();
  }
}
