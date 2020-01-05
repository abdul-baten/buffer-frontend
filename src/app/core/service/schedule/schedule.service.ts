// Core Modules
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

// Application Specific Modules
import { environment } from '@env/environment';
import { ScheduleEventViewModalComponent } from 'src/app/module/schedule/module/modal/schedule-event-view-modal/container/schedule-event-view-modal.component';
import { ScheduleEventDragModalComponent } from 'src/app/module/schedule/module/modal/schedule-event-drag-modal/container/schedule-event-drag-modal.component';
import { ScheduleEventCreateModalComponent } from 'src/app/module/schedule/module/modal/schedule-event-create-modal/container/schedule-event-create-modal.component';

// Third Party Modules
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

// Models
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';
import { CalPostInterface } from 'src/app/module/schedule/model/schedule.model';

// Components

// Constants
const SCHEDULE_URL = environment.scheduleURL;

@Injectable()
export class ScheduleService {
  constructor(private router: Router, private matBottomSheet: MatBottomSheet, private matDialog: MatDialog) {}

  changeCalendarViewOption(calendarViewOptionToNavigate: string): void {
    this.router.navigateByUrl(`${SCHEDULE_URL}/${calendarViewOptionToNavigate}`);
  }

  viewPostDetails(event: CalPostInterface): void {
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
      width: '650px',
      role: 'dialog',
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

  openPostDragAlert(postInfo: CalPostInfoInterface): void {
    this.matDialog.open(ScheduleEventDragModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      width: '400px',
      autoFocus: false,
      direction: 'ltr',
      hasBackdrop: true,
      role: 'alertdialog',
      disableClose: true,
      restoreFocus: false,
      data: postInfo,
      closeOnNavigation: true,
      panelClass: 'buffer--dialog-bottom-sheet-custom-panel',
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop'
    });
  }
}
