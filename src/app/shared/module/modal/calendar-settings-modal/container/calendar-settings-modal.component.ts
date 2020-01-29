// Core Modules
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--calendar-settings-modal',
  templateUrl: './calendar-settings-modal.component.html',
  styleUrls: ['./calendar-settings-modal.component.scss'],
})
export class CalendarSettingsModalComponent {
  constructor(private dialogRef: MatDialogRef<CalendarSettingsModalComponent>) {}

  handleCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
