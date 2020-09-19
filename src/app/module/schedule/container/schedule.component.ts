import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { Component } from '@angular/core';
import { I_POST } from '@core/model';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule',
  styleUrls: ['./schedule.component.scss'],
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent {
  posts$: Observable<I_POST[]>;
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;

  constructor(private router: Router, private readonly facade: ScheduleFacade, private activatedRoute: ActivatedRoute) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();

    this.posts$ = this.activatedRoute.paramMap.pipe(mergeMap((params: ParamMap) => this.facade.getPostsByConnectionID(params.get('id'))));
  }

  onConnectionSelect(connectionID: string) {
    this.router.navigate(['/schedule', connectionID]);
  }
}
