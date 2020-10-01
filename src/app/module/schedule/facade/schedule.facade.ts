import { Calendar } from '@fullcalendar/core';
import { CalViewState } from '../model/calendar.model';
import { ConfirmationService } from 'primeng/api';
import { ConnectionService, GlobalService, ModalService, NotificationService, PostService, ResponsiveLayoutService } from 'src/app/core/service';
import { EventDropArg } from '@fullcalendar/interaction';
import { format } from 'date-fns';
import { I_CONNECTION, I_POST } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { removeNewPostData, setPostType } from 'src/app/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class ScheduleFacade {
  private calendarApi: Calendar;
  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly connectionService: ConnectionService,
    private readonly globalService: GlobalService,
    private readonly modalService: ModalService,
    private readonly postService: PostService,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly snackbarService: NotificationService,
    private store: Store<CalViewState>,
  ) {}

  getFirstConnection(): Observable<{ id: string; type: string }> {
    return this.connectionService.getFirstConnection().pipe(
      map((connection: I_CONNECTION) => {
        const { id, connectionType } = connection;
        const type = connectionType.split('_')[0].toLowerCase();

        return { id, type };
      }),
    );
  }

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

    dialogRef.onClose.subscribe(() => {
      this.store.dispatch(removeNewPostData());
    });
  }

  revertPost(postInfo: EventDropArg): void {
    postInfo.revert();
    this.openSnackbar('Post can not be rescheduled to past date.');
  }

  handlePostDrag(postInfo: EventDropArg): void {
    this.confirmationService.confirm({
      key: 'postReschedule',
      message: 'Are you sure you want to reschedule this post?',
      accept: () => {
        console.warn('asasasas accepted', postInfo);
      },
      reject: () => {
        this.revertPost(postInfo);
      },
    });
  }

  openSnackbar(message: string): void {
    this.snackbarService.showSuccess(message);
  }

  viewPost(postInfo: I_POST): void {
    this.store.dispatch(setPostType({ postType: postInfo.postType }));
    setTimeout(() => {
      const dialogRef = this.modalService.openViewModal('Edit Post', postInfo);

      dialogRef.onDestroy.subscribe(() => {
        this.store.dispatch(removeNewPostData());
      });
    }, 200);
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

  editPost(postInfo: I_POST): void {
    this.store.dispatch(setPostType({ postType: postInfo.postType }));
    setTimeout(() => {
      const dialogRef = this.modalService.openPostModal('Edit Post', postInfo);

      dialogRef.onDestroy.subscribe(() => {
        this.store.dispatch(removeNewPostData());
      });
    }, 200);
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

  getQuerySelector(className: string): HTMLElement {
    return this.globalService.getQuerySelector(className);
  }
}
