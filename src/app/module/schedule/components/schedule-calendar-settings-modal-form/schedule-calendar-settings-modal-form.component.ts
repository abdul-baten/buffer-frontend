// Core Modules
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, HostListener, OnDestroy } from '@angular/core';

// Third Party Modules
import { SubSink } from 'subsink';
import { distinctUntilChanged } from 'rxjs/operators';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

// Enums
import { WEEK_DAY } from '@app/schedule/enum/calendar-week-days.enum';

@Component({
  selector: 'buffer--schedule-calendar-settings-modal-form',
  templateUrl: './schedule-calendar-settings-modal-form.component.html',
  styleUrls: ['./schedule-calendar-settings-modal-form.component.scss'],
})
export class ScheduleCalendarSettingsModalFormComponent implements OnDestroy {
  weekDays = ['Sunday', 'Monday'];

  calendarSettingsForm: FormGroup;

  private subscriptions$ = new SubSink();

  constructor(private formBuilder: FormBuilder, private scheduleFacade: ScheduleFacade) {
    this.calendarSettingsForm = this.buildCalendarSettingsForm();

    this.setCalendarFirstDay();
    this.getCalendarFirstDay();
    this.setCalendarNonCurrentDates();
    this.getCalendarNonCurrentDates();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private buildCalendarSettingsForm(): FormGroup {
    return this.formBuilder.group({
      firstDay: [WEEK_DAY.MONDAY],
      showNonCurrentDates: [true],
    });
  }

  private setCalendarFirstDay(): void {
    this.subscriptions$.add(
      this.calendarSettingsForm.controls.firstDay.valueChanges
        .pipe(distinctUntilChanged())
        .subscribe((firstDay: number) => {
          this.scheduleFacade.setCalendarFirstDay(firstDay);
        }),
    );
  }

  private getCalendarFirstDay(): void {
    this.subscriptions$.add(
      this.scheduleFacade.getCalendarFirstDay().subscribe((firstDay: number) => {
        this.calendarSettingsForm.controls.firstDay.setValue(firstDay);
      }),
    );
  }

  private setCalendarNonCurrentDates(): void {
    this.subscriptions$.add(
      this.calendarSettingsForm.controls.showNonCurrentDates.valueChanges
        .pipe(distinctUntilChanged())
        .subscribe((showNonCurrentDates: boolean) => {
          this.scheduleFacade.setCalendarNonCurrentDates(showNonCurrentDates);
        }),
    );
  }

  private getCalendarNonCurrentDates(): void {
    this.subscriptions$.add(
      this.scheduleFacade.getCalendarNonCurrentDates().subscribe((showNonCurrentDates: boolean) => {
        this.calendarSettingsForm.controls.showNonCurrentDates.setValue(showNonCurrentDates);
      }),
    );
  }
}
