import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CALENDAR_VIEW } from '../enum/calendar-view-options.enum';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { I_CONNECTION_SELECTED, I_POST } from 'src/app/core/model';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '../facade/schedule.facade';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'buffer--schedule',
  styleUrls: ['./schedule.component.css'],
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent {
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;
  isBrowser: boolean;
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  posts$: Observable<I_POST[]>;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly router: Router,
    private readonly facade: ScheduleFacade,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.posts$ = this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => this.facade.getPostsByConnectionID(params.get('id') as string)));
  }

  connectionSelected(connection: I_CONNECTION_SELECTED): void {
    const { id } = connection;
    this.router.navigate(['/schedule', id]);
  }
}
