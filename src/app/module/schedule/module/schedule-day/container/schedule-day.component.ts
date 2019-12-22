// Core Module
import { Component, OnInit } from '@angular/core';

// Third Party Module

// Application Specific Module
import { KeyboardEventService } from '@core/service/keyboard-event/keyboard-event.service';

// Application Specific

@Component({
  selector: 'buffer--schedule-day',
  templateUrl: './schedule-day.component.html',
  styleUrls: ['./schedule-day.component.scss']
})
export class ScheduleDayComponent implements OnInit {
  constructor(private keyboardEventService: KeyboardEventService) {
    this.keyboardEventService.handleKeyboardEvent();
  }

  ngOnInit() {}
}
