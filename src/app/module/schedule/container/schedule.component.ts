import { ActivatedRoute } from '@angular/router';
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { Component, OnInit } from '@angular/core';
import { DocumentInterface } from '@core/model/document/document.model';
import { ScheduleFacade } from '../facade/schedule.facade';

@Component({
  selector: 'buffer--schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  constructor(private activatedRoute: ActivatedRoute, private scheduleFacade: ScheduleFacade) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: DocumentInterface) => this.scheduleFacade.setDocumentTitle(data.title));
  }
}
