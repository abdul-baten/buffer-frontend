import { Calendar } from '@fullcalendar/core';
import { CalendarSettingsModalComponent } from '@shared/module/modal/calendar-settings-modal/container/calendar-settings-modal.component';
import { CalViewState } from '../model/calendar.model';
import { DocumentMetaService } from '@core/service/document-meta/document-meta.service';
import { format } from 'date-fns';
import { I_POST } from '@core/model';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MetaDefinition } from '@angular/platform-browser';
import { ModalService } from '@core/service/modal/modal.service';
import { NotificationService } from '@core/service/notification/notification.service';
import { Observable } from 'rxjs';
import { PostDeleteModalComponent } from '@shared/module/modal/post-delete-modal/container/post-delete-modal.component';
import { PostDetailsModalComponent } from '../../../shared/module/modal/post-details-modal/container/post-details-modal.component';
import { PostModalComponent } from '@shared/module/modal/post-modal/container/post-modal.component';
import { PostRescheduleConfirmModalComponent } from '@shared/module/modal/post-reschedule-confirm-modal/container/post-reschedule-confirm-modal.component';
import { PostRescheduleModalComponent } from '@shared/module/modal/post-reschedule-modal/container/post-reschedule-modal.component';
import { PostService } from '@core/service/post/post.service';
import { removeNewPostData } from 'src/app/actions';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { selectCalendarFirstDay, selectCalendarNonCurrentDates } from '../selector/schedule.selector';
import { setCalendarFirstDay, setCalendarNonCurrentDates } from '@app/schedule/action/calendar.action';
import { Store } from '@ngrx/store';

@Injectable()
export class ScheduleFacade {
  constructor(
    private matDialog: MatDialog,
    private metaService: DocumentMetaService,
    private modalService: ModalService,
    private postService: PostService,
    private responsiveLayoutService: ResponsiveLayoutService,
    private snackbarService: NotificationService,
    private store: Store<CalViewState>,
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

  handlePostCreateDialogOpen(postScheduleDateTime: Date): void {
    const dialogRef = this.modalService.openPostModal('Create Post', {
      postScheduleDateTime: format(postScheduleDateTime, `yyyy-MM-dd'T'HH:mm:ssxxx`),
    });
    dialogRef.onDestroy.subscribe(() => {
      this.store.dispatch(removeNewPostData());
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
    this.matDialog.open(PostModalComponent, {
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
