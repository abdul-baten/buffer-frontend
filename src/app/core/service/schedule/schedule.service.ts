// Core Modules
import { Injectable } from '@angular/core';

// Third Party Modules
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

// Models
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';
import { CalPostInterface } from 'src/app/module/schedule/model/schedule.model';
import { SchedulePostViewModalComponent } from 'src/app/module/schedule/components/schedule-post-view-modal/schedule-post-view-modal.component';
import { SchedulePostCreateModalComponent } from 'src/app/module/schedule/components/schedule-post-create-modal/schedule-post-create-modal.component';
import { SchedulePostRescheduleModalComponent } from 'src/app/module/schedule/components/schedule-post-reschedule-modal/schedule-post-reschedule-modal.component';
import { ScheduleCalendarSettingsModalComponent } from 'src/app/module/schedule/components/schedule-calendar-settings-modal/schedule-calendar-settings-modal.component';

@Injectable()
export class ScheduleService {
  constructor(private matBottomSheet: MatBottomSheet, private matDialog: MatDialog) {}

  viewPostDetails(event: CalPostInterface): void {
    this.matBottomSheet.open(SchedulePostViewModalComponent, {
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
    this.matDialog.open(SchedulePostCreateModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      width: '700px',
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
    this.matDialog.open(SchedulePostRescheduleModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      data: postInfo,
      width: '250px',
      autoFocus: false,
      direction: 'ltr',
      hasBackdrop: true,
      role: 'alertdialog',
      disableClose: true,
      restoreFocus: false,
      closeOnNavigation: true,
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop'
    });
  }

  openCalendarSettingsDialog(): void {
    this.matDialog.open(ScheduleCalendarSettingsModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      width: '500px',
      role: 'dialog',
      autoFocus: false,
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
