import { CalendarSettingsModalComponent } from './container/calendar-settings-modal.component';
import { CalendarSettingsModalFormComponent } from './components/calendar-settings-modal-form/calendar-settings-modal-form.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CalendarSettingsModalComponent, CalendarSettingsModalFormComponent],
  entryComponents: [CalendarSettingsModalComponent],
  exports: [CalendarSettingsModalComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatRadioModule, MatButtonModule],
})
export class CalendarSettingsModalModule {}
