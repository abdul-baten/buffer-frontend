// Core Modules
import { Component, OnInit } from '@angular/core';

// Application Specific Modules

// Third Party Modules

// Services
import { KeyboardEventService } from '@core/service/keyboard-event/keyboard-event.service';

@Component({
  selector: 'buffer--schedule-month',
  templateUrl: './schedule-month.component.html',
  styleUrls: ['./schedule-month.component.scss']
})
export class ScheduleMonthComponent implements OnInit {
  constructor(private keyboardEventService: KeyboardEventService) {
    this.keyboardEventService.handleKeyboardEvent();
  }

  ngOnInit() {}
}
