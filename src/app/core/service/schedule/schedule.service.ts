// Core Modules
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

// Application Specific Modules
import { environment } from '@env/environment';

// Third Party Modules
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

// Models
import { ICalendarEvent } from '@core/model/schedule/schedule.model';

// Components
import { ScheduleEventViewModalComponent } from '@shared/module/modal/schedule-event-view-modal/container/schedule-event-view-modal.component';
import { ScheduleEventCreateModalComponent } from '@shared/module/modal/schedule-event-create-modal/container/schedule-event-create-modal.component';

// Constants
const SCHEDULE_URL = environment.scheduleURL;

@Injectable({
  providedIn: 'root'
})
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

  openCreatePostForm(eventDate: Date): void {
    this.matDialog.open(ScheduleEventCreateModalComponent, {
      data: eventDate,
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      role: 'dialog',
      minWidth: '550px',
      autoFocus: true,
      direction: 'ltr',
      hasBackdrop: true,
      disableClose: false,
      restoreFocus: false,
      closeOnNavigation: true,
      panelClass: 'buffer--dialog-bottom-sheet-custom-panel',
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop'
    });
  }
}
