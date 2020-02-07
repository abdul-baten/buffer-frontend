import { AppScheduleState } from '@app/schedule/reducer';
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { formatISO, getDate, getHours, getMinutes, getMonth, getYear, roundToNearestMinutes } from 'date-fns';
import { fromScheduleActions } from '@app/schedule/action';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostCreateModalComponent } from '@shared/module/modal/post-create-modal/container/post-create-modal.component';
import { Store } from '@ngrx/store';

@Injectable()
export class DashboardFacade {
  constructor(
    private documentTitleService: DocumentTitleService,
    private matDialog: MatDialog,
    private store: Store<AppScheduleState>,
  ) {}

  setTitle(titleString: string): void {
    this.documentTitleService.setDocumentTitle(titleString);
  }

  private getCurrentTime(date: Date): string {
    if (!getHours(date) && !getMinutes(date)) {
      const currentDate = new Date();
      const getCurrentHours = getHours(currentDate);
      const getCurrentMinutes = getMinutes(currentDate);
      const getCurrentDate = getDate(date);
      const getCurrentMonth = getMonth(date);
      const getCurrentYear = getYear(date);
      return formatISO(new Date(getCurrentYear, getCurrentMonth, getCurrentDate, getCurrentHours, getCurrentMinutes));
    } else {
      return formatISO(new Date(date));
    }
  }

  handlePostCreateDialogOpen(postDate: Date): void {
    const postOriginalDate = this.getCurrentTime(postDate);
    this.setPostDate(postOriginalDate);
    this.matDialog.open(PostCreateModalComponent, {
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

  private setPostDate(postDateTime: string): void {
    const postOriginalDate = formatISO(roundToNearestMinutes(new Date(postDateTime), { nearestTo: 15 }));
    this.store.dispatch(fromScheduleActions.setPostDate({ postOriginalDate }));
  }
}
