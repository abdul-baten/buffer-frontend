import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CALENDAR_VIEW } from '../enum/calendar-view-options.enum';
import { Component } from '@angular/core';
import { I_CONNECTION_SELECTED, I_POST } from 'src/app/core/model';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '../facade/schedule.facade';

@Component({
  selector: 'buffer--schedule',
  styleUrls: ['./schedule.component.css'],
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent {
  posts$: Observable<I_POST[]>;
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;

  constructor(private readonly router: Router, private readonly facade: ScheduleFacade, private activatedRoute: ActivatedRoute) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();

    this.posts$ = this.activatedRoute.paramMap.pipe(mergeMap((params: ParamMap) => this.facade.getPostsByConnectionID(params.get('id'))));
  }

  connectionSelected(connection: I_CONNECTION_SELECTED): void {
    const { id } = connection;
    this.router.navigate(['/schedule', id]);
  }
}
