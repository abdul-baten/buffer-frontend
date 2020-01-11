// Core Modules
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Third Party Modules
import { distinctUntilChanged } from 'rxjs/operators';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

// Enums
import { WEEK_DAY } from '@app/schedule/enum/calendar-week-days.enum';

@Component({
  selector: 'buffer--schedule-calendar-settings-modal-form',
  templateUrl: './schedule-calendar-settings-modal-form.component.html',
  styleUrls: ['./schedule-calendar-settings-modal-form.component.scss']
})
export class ScheduleCalendarSettingsModalFormComponent {
  weekDays = ['Sunday', 'Monday'];

  calendarSettingsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private scheduleFacade: ScheduleFacade) {
    this.calendarSettingsForm = this.buildCalendarSettingsForm();

    this.setCalendarFirstDay();
    this.getCalendarFirstDay();
    this.setCalendarNonCurrentDates();
    this.getCalendarNonCurrentDates();
  }

  private buildCalendarSettingsForm(): FormGroup {
    return this.formBuilder.group({
      firstDay: [WEEK_DAY.MONDAY],
      showNonCurrentDates: [true]
    });
  }

  private setCalendarFirstDay(): void {
    this.calendarSettingsForm.controls.firstDay.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((firstDay: number) => {
        this.scheduleFacade.setCalendarFirstDay(firstDay);
      });
  }

  private getCalendarFirstDay(): void {
    this.scheduleFacade.getCalendarFirstDay().subscribe((firstDay: number) => {
      this.calendarSettingsForm.controls.firstDay.setValue(firstDay);
    });
  }

  private setCalendarNonCurrentDates(): void {
    this.calendarSettingsForm.controls.showNonCurrentDates.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((showNonCurrentDates: boolean) => {
        this.scheduleFacade.setCalendarNonCurrentDates(showNonCurrentDates);
      });
  }

  private getCalendarNonCurrentDates(): void {
    this.scheduleFacade.getCalendarNonCurrentDates().subscribe((showNonCurrentDates: boolean) => {
      this.calendarSettingsForm.controls.showNonCurrentDates.setValue(showNonCurrentDates);
    });
  }
}
