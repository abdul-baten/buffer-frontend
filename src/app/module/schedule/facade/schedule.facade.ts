import getDate from 'date-fns/getDate';
import getHours from 'date-fns/getHours';
import getMinutes from 'date-fns/getMinutes';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import { Calendar } from '@fullcalendar/core';
import { CalendarSettingsModalComponent } from '@shared/module/modal/calendar-settings-modal/container/calendar-settings-modal.component';
import { CalViewState } from '../model/calendar.model';
import { DocumentMetaService } from '@core/service/document-meta/document-meta.service';
import { I_POST } from '@core/model';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MetaDefinition } from '@angular/platform-browser';
import { NotificationService } from '@core/service/notification/notification.service';
import { Observable } from 'rxjs';
import { PostCreateModalComponent } from '@shared/module/modal/post-create-modal/container/post-create-modal.component';
import { PostDeleteModalComponent } from '@shared/module/modal/post-delete-modal/container/post-delete-modal.component';
import { PostDetailsModalComponent } from '../../../shared/module/modal/post-details-modal/container/post-details-modal.component';
import { PostEditModalComponent } from '@shared/module/modal/post-edit-modal/container/post-edit-modal.component';
import { PostRescheduleConfirmModalComponent } from '@shared/module/modal/post-reschedule-confirm-modal/container/post-reschedule-confirm-modal.component';
import { PostRescheduleModalComponent } from '@shared/module/modal/post-reschedule-modal/container/post-reschedule-modal.component';
import { PostService } from '@core/service/post/post.service';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { selectCalendarFirstDay, selectCalendarNonCurrentDates } from '../selector/schedule.selector';
import { setCalendarFirstDay, setCalendarNonCurrentDates } from '@app/schedule/action/calendar.action';
import { Store } from '@ngrx/store';
import { DialogService } from 'primeng/dynamicdialog';

@Injectable()
export class ScheduleFacade {
  constructor(
    private matDialog: MatDialog,
    private metaService: DocumentMetaService,
    private postService: PostService,
    private responsiveLayoutService: ResponsiveLayoutService,
    private snackbarService: NotificationService,
    private store: Store<CalViewState>,
    private dialogService: DialogService,
  ) {}

  private calendarApi: Calendar;

  setCalendarApi(calendar: any): void {
    this.calendarApi = calendar;
  }

  setCalendarView(view: string): void {
    this.calendarApi.changeView(view);
  }

  calendarToday() {
    this.calendarApi.today();
  }

  calendarPrev() {
    this.calendarApi.prev();
  }

  calendarNext() {
    this.calendarApi.next();
  }

  calendarDate(date: Date): void {
    this.calendarApi.gotoDate(date);
  }

  updateDocumentMetaTag(tag: MetaDefinition): void {
    this.metaService.updateDocumentMetaTag(tag);
  }

  changeCalendarViewOption(viewOption: string) {
    this.calendarApi.changeView(viewOption);
  }

  private getCurrentTime(date: Date): Date {
    if (!getHours(date) && !getMinutes(date)) {
      const currentDate = new Date();
      const getCurrentHours = getHours(currentDate);
      const getCurrentMinutes = getMinutes(currentDate);
      const getCurrentDate = getDate(date);
      const getCurrentMonth = getMonth(date);
      const getCurrentYear = getYear(date);
      return new Date(getCurrentYear, getCurrentMonth, getCurrentDate, getCurrentHours, getCurrentMinutes);
    } else {
      return new Date(date);
    }
  }

  handlePostCreateDialogOpen(postScheduleDateTime: Date, activeConnectionID: string = ''): void {
    const postScheduledDateTime = this.getCurrentTime(postScheduleDateTime);
    this.dialogService.open(PostCreateModalComponent, {
      header: 'Create Post',
      width: '550px',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      data: {
        postScheduledDateTime,
        activeConnectionID,
      },
    });
  }

  handlePostDrag(postInfo: I_POST): void {
    this.matDialog.open(PostRescheduleConfirmModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
      data: postInfo,
      width: '450px',
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

  openSnackbar(message: string): void {
    this.snackbarService.openSnackBar(message);
  }

  handleCalendarSettingsDialogOpen(): void {
    this.matDialog.open(CalendarSettingsModalComponent, {
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

  handlePostDetailsDialogOpen(postInfo: I_POST): void {
    this.matDialog.open(PostDetailsModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
      data: postInfo,
      width: '950px',
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

  handlePostDeleteDialogOpen(postId: string): void {
    this.matDialog.open(PostDeleteModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
      data: postId,
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

  handlePostRescheduleDialogOpen(postId: string, postDate: Date): void {
    this.matDialog.open(PostRescheduleModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
      data: { postId, postDate },
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

  handlePostEditDialogOpen(postInfo: I_POST): void {
    this.matDialog.open(PostEditModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
      data: postInfo,
      width: '700px',
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

  setCalendarFirstDay(firstDay: number): void {
    this.store.dispatch(setCalendarFirstDay({ firstDay }));
  }

  setCalendarNonCurrentDates(showNonCurrentDates: boolean): void {
    this.store.dispatch(setCalendarNonCurrentDates({ showNonCurrentDates }));
  }

  getCalendarFirstDay(): Observable<number> {
    return this.store.select(selectCalendarFirstDay);
  }

  getCalendarNonCurrentDates(): Observable<boolean> {
    return this.store.select(selectCalendarNonCurrentDates);
  }

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  isHandset(): Observable<boolean> {
    return this.responsiveLayoutService.isHandset();
  }

  isTablet(): Observable<boolean> {
    return this.responsiveLayoutService.isTablet();
  }

  getPostsByConnectionID(connectionID: string): Observable<I_POST[]> {
    return this.postService.filterPostsByConnectionID(connectionID);
  }
}
