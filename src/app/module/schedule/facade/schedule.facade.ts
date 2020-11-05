import { Calendar } from '@fullcalendar/core';
import { ConfirmationService } from 'primeng/api';
import {
  ConnectionService,
  GlobalService,
  ModalService,
  NotificationService,
  PostService,
  ResponsiveLayoutService
} from 'src/app/core/service';
import { EventDropArg } from '@fullcalendar/interaction';
import { IConnection, IPost } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ScheduleFacade {
  private calendar_api!: Calendar;

  constructor (
    private readonly confirmationService: ConfirmationService,
    private readonly connectionService: ConnectionService,
    private readonly globalService: GlobalService,
    private readonly modalService: ModalService,
    private readonly postService: PostService,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly snackbarService: NotificationService
  ) {}

  public getFirstConnection (): Observable<{ id: string; type: string }> {
    return this.connectionService.getFirstConnection().pipe(map((connection: IConnection) => {
      const { id, connection_type } = connection;
      const type = connection_type.split('_')[0].toLowerCase();

      return { id,
        type };
    }));
  }

  public setCalendarApi (calendar: Calendar): void {
    this.calendar_api = calendar;
  }

  public setCalendarView (view: string): void {
    this.calendar_api.changeView(view);
  }

  public calendarToday (): void {
    this.calendar_api.today();
  }

  public calendarPrev (): void {
    this.calendar_api.prev();
  }

  public calendarNext (): void {
    this.calendar_api.next();
  }

  public calendarDate (date: Date): void {
    this.calendar_api.gotoDate(date);
  }

  public changeCalendarViewOption (view_option: string): void {
    this.calendar_api.changeView(view_option);
  }

  public handlePostCreateDialogOpen (post_date_time: Date): void {
    this.modalService.openPostModal({ post_date_time });
  }

  public revertPost (post_info: EventDropArg): void {
    post_info.revert();
    this.openSnackbar('Post can not be rescheduled to past date.');
  }

  public handlePostDrag (post_info: EventDropArg): void {
    this.confirmationService.confirm({
      accept: () => {
        console.warn('asasasas accepted', post_info);
      },
      key: 'postReschedule',
      message: 'Are you sure you want to reschedule this post?',
      reject: () => {
        this.revertPost(post_info);
      }
    });
  }

  public openSnackbar (message: string): void {
    this.snackbarService.showSuccess(message);
  }

  public viewPost (post_info: IPost): void {
    this.modalService.openViewModal('Edit Post', post_info);
  }

  public deletePost (post_id: string): void {
    this.confirmationService.confirm({
      accept: () => {
        console.warn('asasasas accepted', post_id);
      },
      key: 'postDelete',
      message: 'Are you sure you want to delete this post?'
    });
  }

  public editPost (post_info: IPost): void {
    this.modalService.openPostModal(post_info);
  }

  public isWeb (): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  public isHandset (): Observable<boolean> {
    return this.responsiveLayoutService.isHandset();
  }

  public isTablet (): Observable<boolean> {
    return this.responsiveLayoutService.isTablet();
  }

  public getPostsByConnectionID (connection_id: string): Observable<IPost[]> {
    return this.postService.filterPostsByConnectionID(connection_id);
  }

  public getQuerySelector (class_name: string): HTMLElement {
    return this.globalService.getQuerySelector(class_name);
  }
}
