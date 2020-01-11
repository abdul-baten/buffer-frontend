// Core Modules
import { Component, Input, EventEmitter, Output } from '@angular/core';

// Third Party Modules

@Component({
  selector: 'buffer--schedule-post-view-modal-header',
  templateUrl: './schedule-post-view-modal-header.component.html',
  styleUrls: ['./schedule-post-view-modal-header.component.scss']
})
export class SchedulePostViewModalHeaderComponent {
  @Input() eventTitle = '';
  @Output() bottomSheetClosed = new EventEmitter<any>();

  onBottomSheetClicked(): void {
    this.bottomSheetClosed.emit();
  }
}
