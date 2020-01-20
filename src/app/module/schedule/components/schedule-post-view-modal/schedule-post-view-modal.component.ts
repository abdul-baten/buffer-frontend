// Core Module
import { Component, Inject } from '@angular/core';

// Third Party Module
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'buffer--schedule-post-view-modal',
  templateUrl: './schedule-post-view-modal.component.html',
  styleUrls: ['./schedule-post-view-modal.component.scss'],
})
export class SchedulePostViewModalComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private matBottomSheetRef: MatBottomSheetRef<SchedulePostViewModalComponent>,
  ) {}

  onBottomSheetClosed(): void {
    this.matBottomSheetRef.dismiss();
  }
}
