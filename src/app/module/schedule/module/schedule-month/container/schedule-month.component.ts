// Core Modules
import { Component, OnInit } from '@angular/core';

// Application Specific Modules

// Third Party Modules

// Services
import { KeyboardEventService } from '@core/service/keyboard-event/keyboard-event.service';

// Facades
import { ScheduleFacade } from '../../../facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-month',
  templateUrl: './schedule-month.component.html',
  styleUrls: ['./schedule-month.component.scss']
})
export class ScheduleMonthComponent implements OnInit {
  constructor(private keyboardEventService: KeyboardEventService, private scheduleFacade: ScheduleFacade) {
    this.keyboardEventService.handleKeyboardEvent();
  }

  ngOnInit() {
    this.scheduleFacade.updateDocumentMetaTag({});
  }
}
