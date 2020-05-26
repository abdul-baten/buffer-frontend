import { Component, HostListener, OnDestroy } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { E_CAL_WEEK_DAY } from '@core/enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--calendar-settings-modal-form',
  templateUrl: './calendar-settings-modal-form.component.html',
  styleUrls: ['./calendar-settings-modal-form.component.scss'],
})
export class CalendarSettingsModalFormComponent implements OnDestroy {
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
      firstDay: [E_CAL_WEEK_DAY.MONDAY],
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
