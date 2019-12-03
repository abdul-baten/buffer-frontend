// Core Module
import { Component, OnInit } from '@angular/core';

// Third Party Module

// Application Specific Module
import { KeyboardEventService } from '@core/service/keyboard-event/keyboard-event.service';

// Application Specific

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
