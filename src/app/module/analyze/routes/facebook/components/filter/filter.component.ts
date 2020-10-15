import lastDayOfMonth from 'date-fns/lastDayOfMonth';
import lastDayOfWeek from 'date-fns/lastDayOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import subDays from 'date-fns/subDays';
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';
import {
  Component,
  HostListener,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { noop, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FacebookFacade } from '../../facade/facebook.facade';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'buffer-filter',
  styleUrls: ['./filter.component.css'],
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnDestroy {
  @ViewChild('overlay') overlay!: OverlayPanel;
  private subscription$ = new Subscription();
  public calendar_date_range: Date[] = [startOfWeek(new Date()), lastDayOfWeek(new Date())];
  public current_date_time = new Date();
  public date_range: string[];

  constructor (private activatedRoute: ActivatedRoute, private readonly facade: FacebookFacade) {
    this.date_range = [this.facade.formatDate(subDays(new Date(), Number.parseInt('6', 10))), this.facade.formatDate(new Date())];
  }

  public formattedDate (dates: string[]): string {
    return dates.join(' - ');
  }

  public setThisWeek (): void {
    this.date_range = [this.facade.formatDate(startOfWeek(new Date())), this.facade.formatDate(lastDayOfWeek(new Date()))];
    this.overlay.hide();
    this.setDate();
  }

  public setLastWeek (): void {
    const last_week = subWeeks(new Date(), 1);

    this.date_range = [this.facade.formatDate(startOfWeek(last_week)), this.facade.formatDate(lastDayOfWeek(last_week))];
    this.overlay.hide();
    this.setDate();
  }

  public setThisMonth (): void {
    this.date_range = [this.facade.formatDate(startOfMonth(new Date())), this.facade.formatDate(lastDayOfMonth(new Date()))];
    this.overlay.hide();
    this.setDate();
  }

  public setLastMonth (): void {
    const last_month = subMonths(new Date(), 1);

    this.date_range = [this.facade.formatDate(startOfMonth(last_month)), this.facade.formatDate(lastDayOfMonth(last_month))];
    this.overlay.hide();
    this.setDate();
  }

  public setCalendarDate (): void {
    this.date_range = this.calendar_date_range.map((date) => this.facade.formatDate(date));
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
