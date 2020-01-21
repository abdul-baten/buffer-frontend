// Core MOdules
import { Component, OnInit } from '@angular/core';

// Third Party Modules
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

// Enums
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer--schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  currency$: Observable<any>;
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.currency$ = this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.pipe(map(result => result.data));
  }
}
