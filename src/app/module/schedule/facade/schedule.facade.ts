import format from 'date-fns/format';
import formatISO from 'date-fns/formatISO';
import getDate from 'date-fns/getDate';
import getHours from 'date-fns/getHours';
import getMinutes from 'date-fns/getMinutes';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import roundToNearestMinutes from 'date-fns/roundToNearestMinutes';
import { AppScheduleState } from '@app/schedule/reducer';
import { Calendar } from '@fullcalendar/core';
import { CalPostInterface } from '@app/schedule/model/schedule.model';
import { DocumentMetaService } from '@core/service/document-meta/document-meta.service';
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { fromCalendarActions, fromScheduleActions } from '@app/schedule/action';
import { Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MetaDefinition } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import { POST_TYPE } from '@app/schedule/enum/schedule-post-create-modal.enum';
import { postTypeMap } from '@app/schedule/model/post-type.model';
import { ScheduleCalendarPostDetailsModalComponent } from '../components/schedule-calendar-post-details-modal/schedule-calendar-post-details-modal.component';
import { ScheduleCalendarSettingsModalComponent } from '@app/schedule/components/schedule-calendar-settings-modal/schedule-calendar-settings-modal.component';
import { ScheduleDeletePostModalComponent } from '@app/schedule/components/schedule-delete-post-modal/schedule-delete-post-modal.component';
import { SchedulePostCreateModalComponent } from '@app/schedule/components/schedule-post-create-modal/schedule-post-create-modal.component';
import { SchedulePostRescheduleConfirmModalComponent } from '@app/schedule/components/schedule-post-reschedule-confirm-modal/schedule-post-reschedule-confirm-modal.component';
import { SchedulePostRescheduleModalComponent } from '@app/schedule/components/schedule-post-reschedule-modal/schedule-post-reschedule-modal.component';
import { SnackbarService } from '@core/service/snackbar/snackbar.service';
import { Store } from '@ngrx/store';
import {
  selectCalendarFirstDay,
  selectCalendarNonCurrentDates,
  selectCalendarSidebarStatus,
  selectPostDate,
  selectPostType,
} from '@app/schedule/selector/schedule.selector';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';

// Third Party Modules

@Injectable()
export class ScheduleFacade {
  constructor(
    private injector: Injector,
    private matDialog: MatDialog,
    private metaService: DocumentMetaService,
    private snackbarService: SnackbarService,
    private store: Store<AppScheduleState>,
    private titleService: DocumentTitleService,
    private responsiveLayoutService: ResponsiveLayoutService,
  ) {}

  private calendarApi: Calendar;
  private createPostModalSubject$ = new Subject();

  setPostCreateModalObservable(): void {
    this.createPostModalSubject$.next();
  }

  getPostCreateModalObservable(): Observable<any> {
    return this.createPostModalSubject$;
  }

  setDocumentTitle(titleString: string): void {
    this.titleService.setDocumentTitle(titleString);
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

  updateDocumentMetaTag(tag: MetaDefinition): void {
    this.metaService.updateDocumentMetaTag(tag);
  }

  changeCalendarViewOption(viewOption: string) {
    this.calendarApi.changeView(viewOption);
  }

  openCreatePostForm(postDate: Date): void {
    const postOriginalDate = this.getCurrentTime(postDate);
    this.setPostDate(postOriginalDate);
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

  onPostDragged(postInfo: CalPostInterface): void {
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

  setPostType(postType: POST_TYPE): void {
    this.store.dispatch(fromScheduleActions.setPostType({ postType }));
  }

  getPostType(): Observable<POST_TYPE> {
    return this.store.select(selectPostType);
  }

  private setPostDate(postDateTime: string): void {
    const postOriginalDate = formatISO(roundToNearestMinutes(new Date(postDateTime), { nearestTo: 15 }));
    this.store.dispatch(fromScheduleActions.setPostDate({ postOriginalDate }));
  }

  getPostDate(): Observable<string> {
    return this.store.select(selectPostDate);
  }

  setPostData(formData: CalPostInterface): void {
    const postDate = format(new Date(formData.postDate), 'MM/dd/yyyy');
    const postTime = format(new Date(formData.postDate), 'hh:mm a');
    const postData = Object.assign(formData, { postDate, postTime });

    this.store.dispatch(fromScheduleActions.setPostData({ postData }));
  }

  generateDropZoneConfig(type: POST_TYPE): DropzoneConfigInterface {
    const injectableService = postTypeMap.get(type);
    const service = this.injector.get(injectableService);
    return service.generateConfig();
  }

  openSnackbar(message: string, action: string = 'Close'): void {
    this.snackbarService.openSnackBar(message, action);
  }

  openCalenderSettings(): void {
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

  openPostDetailsDialog(postInfo: CalPostInterface): void {
    this.matDialog.open(ScheduleCalendarPostDetailsModalComponent, {
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

  openPostDeleteDialog(postId: string): void {
    this.matDialog.open(ScheduleDeletePostModalComponent, {
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

  openPostRescheduleDialog(postId: string, postDate: Date): void {
    this.matDialog.open(SchedulePostRescheduleModalComponent, {
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

  setCalendarFirstDay(firstDay: number): void {
    this.store.dispatch(fromCalendarActions.setCalendarFirstDay({ firstDay }));
  }

  setCalendarNonCurrentDates(showNonCurrentDates: boolean): void {
    this.store.dispatch(fromCalendarActions.setCalendarNonCurrentDates({ showNonCurrentDates }));
  }

  setCalendarSidebarStatus(calendarSidebarOpened: boolean): void {
    return this.store.dispatch(fromCalendarActions.setCalendarSidebarStatus({ calendarSidebarOpened }));
  }

  getCalendarFirstDay(): Observable<number> {
    return this.store.select(selectCalendarFirstDay);
  }

  getCalendarNonCurrentDates(): Observable<boolean> {
    return this.store.select(selectCalendarNonCurrentDates);
  }

  getCalendarSidebarStatus(): Observable<boolean> {
    return this.store.select(selectCalendarSidebarStatus);
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
}
