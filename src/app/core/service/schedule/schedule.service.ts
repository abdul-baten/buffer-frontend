// Core Modules
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

// Application Specific Modules
import { environment } from '@env/environment';
import { ScheduleEventViewModalComponent } from 'src/app/module/schedule/module/modal/schedule-event-view-modal/container/schedule-event-view-modal.component';
import { ScheduleEventCreateModalComponent } from 'src/app/module/schedule/module/modal/schedule-event-create-modal/container/schedule-event-create-modal.component';

// Third Party Modules
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

// Models
import { ICalendarEvent } from '@core/model/schedule/schedule.model';

// Components

// Constants
const SCHEDULE_URL = environment.scheduleURL;

@Injectable()
export class ScheduleService {
  constructor(private router: Router, private matBottomSheet: MatBottomSheet, private matDialog: MatDialog) {}

  changeCalendarViewOption(calendarViewOptionToNavigate: string): void {
    this.router.navigateByUrl(`${SCHEDULE_URL}/${calendarViewOptionToNavigate}`);
  }

  viewPostDetails(event: ICalendarEvent): void {
    this.matBottomSheet.open(ScheduleEventViewModalComponent, {
      data: event,
      direction: 'ltr',
      autoFocus: false,
      hasBackdrop: true,
      disableClose: false,
      restoreFocus: false,
      closeOnNavigation: true,
      panelClass: 'buffer--dialog-bottom-sheet-custom-panel',
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop'
    });
  }

  openCreatePostFormDialog(): void {
    this.matDialog.open(ScheduleEventCreateModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      role: 'dialog',
      width: '600px',
      autoFocus: true,
      direction: 'ltr',
      hasBackdrop: true,
      disableClose: true,
      restoreFocus: false,
      closeOnNavigation: true,
      panelClass: 'buffer--dialog-bottom-sheet-custom-panel',
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop'
    });
  }
}
