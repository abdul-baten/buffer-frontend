// Core Modules
import { Component, Input, EventEmitter, Output } from '@angular/core';

// Third Party Modules

@Component({
  selector: 'buffer--schedule-event-view-modal-header',
  templateUrl: './schedule-event-view-modal-header.component.html',
  styleUrls: ['./schedule-event-view-modal-header.component.scss']
})
export class ScheduleEventViewModalHeaderComponent {
  @Input() eventTitle = '';
  @Output() bottomSheetClosed = new EventEmitter();

  constructor() {}

  onBottomSheetClicked(): void {
    this.bottomSheetClosed.emit();
  }
}
