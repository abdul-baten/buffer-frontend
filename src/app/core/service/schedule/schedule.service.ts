// Core Modules
import { Injectable } from '@angular/core';

// Third Party Modules
import { MatDialog } from '@angular/material/dialog';

// Models
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';
import { SchedulePostCreateModalComponent } from '@app/schedule/components/schedule-post-create-modal/schedule-post-create-modal.component';
import { ScheduleDeletePostModalComponent } from '@app/schedule/components/schedule-delete-post-modal/schedule-delete-post-modal.component';
import { SchedulePostRescheduleModalComponent } from '@app/schedule/components/schedule-post-reschedule-modal/schedule-post-reschedule-modal.component';
import { ScheduleCalendarSettingsModalComponent } from '@app/schedule/components/schedule-calendar-settings-modal/schedule-calendar-settings-modal.component';
import { SchedulePostRescheduleConfirmModalComponent } from '@app/schedule/components/schedule-post-reschedule-confirm-modal/schedule-post-reschedule-confirm-modal.component';

@Injectable()
export class ScheduleService {
  constructor(private matDialog: MatDialog) {}

  openCreatePostFormDialog(): void {
    this.matDialog.open(SchedulePostCreateModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
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
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop',
    });
  }

  openPostRescheduleConfirmDialog(postInfo: CalPostInfoInterface): void {
    this.matDialog.open(SchedulePostRescheduleConfirmModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
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
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop',
    });
  }

  openCalendarSettingsDialog(): void {
    this.matDialog.open(ScheduleCalendarSettingsModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
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
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop',
    });
  }

  openPostDeleteDialog(postId: string): void {
    this.matDialog.open(ScheduleDeletePostModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
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
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop',
    });
  }

  openPostRescheduleDialog(postId: string, postDate: Date): void {
    this.matDialog.open(SchedulePostRescheduleModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
      data: { postId, postDate },
      width: '400px',
      role: 'dialog',
      autoFocus: false,
      direction: 'ltr',
      hasBackdrop: true,
      disableClose: true,
      restoreFocus: false,
      closeOnNavigation: true,
      panelClass: 'buffer--dialog-bottom-sheet-custom-panel',
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop',
    });
  }
}
