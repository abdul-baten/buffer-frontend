// Core Modules
import { Injectable } from '@angular/core';

// Third Party Modules
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

// Models
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';
import { CalPostInterface } from '@app/schedule/model/schedule.model';
import { SchedulePostViewModalComponent } from '@app/schedule/components/schedule-post-view-modal/schedule-post-view-modal.component';
import { SchedulePostCreateModalComponent } from '@app/schedule/components/schedule-post-create-modal/schedule-post-create-modal.component';
import { ScheduleDeletePostModalComponent } from '@app/schedule/components/schedule-delete-post-modal/schedule-delete-post-modal.component';
import { ScheduleCalendarSettingsModalComponent } from '@app/schedule/components/schedule-calendar-settings-modal/schedule-calendar-settings-modal.component';
import { SchedulePostRescheduleConfirmModalComponent } from '@app/schedule/components/schedule-post-reschedule-confirm-modal/schedule-post-reschedule-confirm-modal.component';

@Injectable()
export class ScheduleService {
  constructor(private matBottomSheet: MatBottomSheet, private matDialog: MatDialog) {}

  viewPostDetails(event: CalPostInterface): void {
    this.matBottomSheet.open(SchedulePostViewModalComponent, {
      data: event,
      direction: 'ltr',
      autoFocus: false,
      hasBackdrop: true,
      disableClose: true,
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

  openPostRescheduleConfirmDialog(postInfo: CalPostInfoInterface): void {
    this.matDialog.open(SchedulePostRescheduleConfirmModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      data: postInfo,
      width: '400px',
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
      width: '450px',
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

  openPostDeleteDialog(postId: string): void {
    this.matDialog.open(ScheduleDeletePostModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      data: postId,
      width: '400px',
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
