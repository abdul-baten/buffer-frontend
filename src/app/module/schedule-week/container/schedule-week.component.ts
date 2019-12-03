// Core Module
import { Component, OnInit } from '@angular/core';

// Third Party Module

// Application Specific Module
import { KeyboardEventService } from '@core/service/keyboard-event/keyboard-event.service';

// Application Specific

@Component({
  selector: 'buffer--schedule-week',
  templateUrl: './schedule-week.component.html',
  styleUrls: ['./schedule-week.component.scss']
})
export class ScheduleWeekComponent implements OnInit {
  constructor(private keyboardEventService: KeyboardEventService) {
    this.keyboardEventService.handleKeyboardEvent();
  }

  ngOnInit() {}
}
