import { Calendar } from '@fullcalendar/core';
import { CalViewState } from '../model/calendar.model';
import { ConfirmationService } from 'primeng/api';
import { format } from 'date-fns';
import { I_POST } from '@core/model';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from '@core/service/modal/modal.service';
import { NotificationService } from '@core/service/notification/notification.service';
import { Observable } from 'rxjs';
import { PostDetailsModalComponent } from '../../../shared/module/modal/post-details-modal/container/post-details-modal.component';
import { PostModalComponent } from '@shared/module/modal/post-modal/container/post-modal.component';
import { PostRescheduleConfirmModalComponent } from '@shared/module/modal/post-reschedule-confirm-modal/container/post-reschedule-confirm-modal.component';
import { PostService } from '@core/service/post/post.service';
import { removeNewPostData } from 'src/app/actions';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { Store } from '@ngrx/store';

@Injectable()
export class ScheduleFacade {
  constructor(
    private matDialog: MatDialog,
    private modalService: ModalService,
    private readonly confirmationService: ConfirmationService,
    private readonly postService: PostService,
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

  deletePost(postId: string): void {
    this.confirmationService.confirm({
      key: 'postDelete',
      message: 'Are you sure you want to delete this post?',
      accept: () => {
        console.warn('asasasas accepted', postId);
      },
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
