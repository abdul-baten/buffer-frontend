import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ECalendarView } from 'src/app/core/enum';
import { isPlatformBrowser } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import type { ActivatedRoute, ParamMap, Router } from '@angular/router';
import type { IConnectionSelected, IPost } from 'src/app/core/model';
import type { Observable } from 'rxjs';
import type { ScheduleFacade } from '../facade/schedule.facade';

@Component({
  selector: 'buffer-schedule',
  styleUrls: ['./schedule.component.css'],
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
  public calendar_view = ECalendarView.DAY_GRID_MONTH;
  public is_platform_browser: boolean;
  public is_platform_handset$: Observable<boolean>;
  public is_platform_tablet$: Observable<boolean>;
  public posts$: Observable<IPost[]>;

  constructor (
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly router: Router,
    private readonly facade: ScheduleFacade,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.is_platform_browser = isPlatformBrowser(this.platformId);
    this.is_platform_handset$ = this.facade.isHandset();
    this.is_platform_tablet$ = this.facade.isTablet();
    this.posts$ = this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => this.facade.getPostsByConnectionID(params.get('id') as string)));
  }

  public connectionSelected (connection: IConnectionSelected): void {
    const { id } = connection;

    this.router.navigate(['/schedule', id]);
  }
}
