import dayJs from 'dayjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  Component,
  HostListener,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { InstagramFacade } from '../../facade/instagram.facade';
import { noop, Subscription } from 'rxjs';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'buffer-filter',
  styleUrls: ['./filter.component.css'],
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnDestroy {
  @ViewChild('overlay', { read: OverlayPanel }) overlay!: OverlayPanel;
  private subscription$ = new Subscription();
  public calendar_date_range: Date[] = [
    dayJs().subtract(Number.parseInt('6', 10), 'day').
      toDate(), dayJs().toDate()
  ];

  public current_date_time = dayJs().toDate();
  public date_range: Date[];

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: InstagramFacade) {
    this.date_range = [
      dayJs().subtract(Number.parseInt('6', 10), 'day').
        toDate(), dayJs().toDate()
    ];
  }

  public formattedDate (dates: Date[]): string {
    return dates.map((date: Date) => dayJs(date).format('MMM DD, YYYY')).join(' - ');
  }

  public setThisWeek (): void {
    this.date_range = [
      dayJs().
        startOf('week').
        toDate(),
      dayJs().
        endOf('week').
        toDate()
    ];

    this.calendar_date_range = [
      dayJs().
        startOf('week').
        toDate(),
      dayJs().
        endOf('week').
        toDate()
    ];
    this.overlay.hide();
    this.setDate();
  }

  public setLastWeek (): void {
    const last_week = dayJs().subtract(1, 'week');

    this.date_range = [
      dayJs(last_week).
        startOf('week').
        toDate(),
      dayJs(last_week).
        endOf('week').
        toDate()
    ];

    this.calendar_date_range = [
      dayJs(last_week).
        startOf('week').
        toDate(),
      dayJs(last_week).
        endOf('week').
        toDate()
    ];
    this.overlay.hide();
    this.setDate();
  }

  public setThisMonth (): void {
    this.date_range = [
      dayJs().
        startOf('month').
        toDate(),
      dayJs().
        endOf('month').
        toDate()
    ];

    this.calendar_date_range = [
      dayJs().
        startOf('month').
        toDate(),
      dayJs().
        endOf('month').
        toDate()
    ];
    this.overlay.hide();
    this.setDate();
  }

  public setLastMonth (): void {
    const last_month = dayJs().subtract(1, 'month');

    this.date_range = [
      dayJs(last_month).
        startOf('month').
        toDate(),
      dayJs(last_month).
        endOf('month').
        toDate()
    ];

    this.calendar_date_range = [
      dayJs(last_month).
        startOf('month').
        toDate(),
      dayJs(last_month).
        endOf('month').
        toDate()
    ];
    this.overlay.hide();
    this.setDate();
  }

  public clearDate (): void {
    this.date_range = [
      dayJs().subtract(Number.parseInt('6', 10), 'day').
        toDate(), dayJs().toDate()
    ];
    this.overlay.hide();
    this.setDate();
  }

  public setCalendarDate (): void {
    this.date_range = this.calendar_date_range.map((date) => dayJs(this.facade.formatDate(date)).toDate());
    this.overlay.hide();
    this.setDate();
  }

  private setDate (): void {
    this.activatedRoute.parent?.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id') as string;

      this.subscription$.add(this.facade.getInsights({
        date_range: this.date_range,
        id
      }).subscribe(noop));
    });
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
