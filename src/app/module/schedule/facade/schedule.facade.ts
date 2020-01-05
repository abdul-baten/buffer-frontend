// Core Modules
import { Injectable, Injector } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';

// Application Specific Modules

// Third Party Modules
import { Observable } from 'rxjs';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { format, getHours, getMonth, getDate, getMinutes, getYear } from 'date-fns';

// Enums
import { POST_TYPE } from '../enum/schedule-event-create-modal.enum';

// Models
import { postTypeMap } from '../model/post-type.model';
import { PostScheduleState } from '../model/schedule.model';
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';

// Services
import { ScheduleService } from '@core/service/schedule/schedule.service';
import { SnackbarService } from '@core/service/snackbar/snackbar.service';
import { DocumentMetaService } from '@core/service/document-meta/document-meta.service';

// Store
import { Store } from '@ngrx/store';
import { fromScheduleActions } from '../action';
import { selectPostType, selectPostDate } from '../selector/schedule.selector';

@Injectable()
export class ScheduleFacade {
  constructor(
    private injector: Injector,
    private store: Store<PostScheduleState>,
    private scheduleService: ScheduleService,
    private metaService: DocumentMetaService,
    private snackbarService: SnackbarService
  ) {}

  updateDocumentMetaTag(tag: MetaDefinition): void {
    this.metaService.updateDocumentMetaTag(tag);
  }

  changeCalendarViewOption(viewOption: string) {
    this.scheduleService.changeCalendarViewOption(viewOption);
  }

  viewPostDetails(event: any): void {
    this.scheduleService.viewPostDetails(event);
  }

  openCreatePostForm(postDate: Date): void {
    const postOriginalDate = this.getCurrentTime(postDate);
    this.setPostDate(postOriginalDate);
    this.scheduleService.openCreatePostFormDialog();
  }

  private getCurrentTime(date: Date): string {
    const currentDate = new Date();
    const getCurrentHours = getHours(currentDate);
    const getCurrentMinutes = getMinutes(currentDate);
    const getCurrentDate = getDate(date);
    const getCurrentMonth = getMonth(date);
    const getCurrentYear = getYear(date);

    return new Date(getCurrentYear, getCurrentMonth, getCurrentDate, getCurrentHours, getCurrentMinutes).toISOString();
  }

  onPostDragged(postInfo: CalPostInfoInterface): void {
    this.scheduleService.openPostDragAlert(postInfo);
  }

  removePostData(): void {
    this.store.dispatch(fromScheduleActions.removePostData());
  }

  setPostType(postType: POST_TYPE): void {
    this.store.dispatch(fromScheduleActions.setPostType({ postType }));
  }

  getPostType(): Observable<POST_TYPE> {
    return this.store.select(selectPostType);
  }

  private setPostDate(postOriginalDate: string): void {
    this.store.dispatch(fromScheduleActions.setPostDate({ postOriginalDate }));
  }

  getPostDate(): Observable<string> {
    return this.store.select(selectPostDate);
  }

  setPostData(formData: PostScheduleState): void {
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

  openSnackbar(message: string, action: string = ''): void {
    this.snackbarService.openSnackBar(message, action);
  }

  openCalenderSettings(): void {
    this.scheduleService.openCalendarSettingsDialog();
  }
}
