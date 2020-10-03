import lastDayOfMonth from 'date-fns/lastDayOfMonth';
import lastDayOfWeek from 'date-fns/lastDayOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import subDays from 'date-fns/subDays';
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { FacebookFacade } from '../../facade/facebook.facade';
import { noop, Subscription } from 'rxjs';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'buffer--filter',
  styleUrls: ['./filter.component.css'],
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnDestroy {
  @ViewChild('overlayPanel')
  overlayPanel!: OverlayPanel;
  calendarDateRange: Date[] = [startOfWeek(new Date()), lastDayOfWeek(new Date())];
  dateRange: string[];
  maxDate = new Date();
  private subscription$ = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private facade: FacebookFacade) {
    this.dateRange = [this.facade.formatDate(subDays(new Date(), 6)), this.facade.formatDate(new Date())];
  }

  formattedDate(dates: string[]): string {
    return dates.join(' - ');
  }

  setThisWeek(): void {
    this.dateRange = [this.facade.formatDate(startOfWeek(new Date())), this.facade.formatDate(lastDayOfWeek(new Date()))];
    this.overlayPanel.hide();
    this.setDate();
  }

  setLastWeek(): void {
    const lastWeek = subWeeks(new Date(), 1);
    this.dateRange = [this.facade.formatDate(startOfWeek(lastWeek)), this.facade.formatDate(lastDayOfWeek(lastWeek))];
    this.overlayPanel.hide();
    this.setDate();
  }

  setThisMonth(): void {
    this.dateRange = [this.facade.formatDate(startOfMonth(new Date())), this.facade.formatDate(lastDayOfMonth(new Date()))];
    this.overlayPanel.hide();
    this.setDate();
  }

  setLastMonth(): void {
    const lastWeek = subMonths(new Date(), 1);
    this.dateRange = [this.facade.formatDate(startOfMonth(lastWeek)), this.facade.formatDate(lastDayOfMonth(lastWeek))];
    this.overlayPanel.hide();
    this.setDate();
  }

  setCalendarDate(): void {
    this.dateRange = this.calendarDateRange.map((date) => this.facade.formatDate(date));
    this.overlayPanel.hide();
    this.setDate();
  }

  private setDate(): void {
    this.activatedRoute.parent?.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id') as string;
      this.subscription$.add(this.facade.getInsights({ id, dateRange: this.dateRange }).subscribe(noop));
    });
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
