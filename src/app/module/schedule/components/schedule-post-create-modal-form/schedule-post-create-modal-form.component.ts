// Core Modules
import { Component, ViewChild } from '@angular/core';

// Third Party Modules
import { Observable } from 'rxjs';

// Enums
import { POST_TYPE } from 'src/app/module/schedule/enum/schedule-post-create-modal.enum';

// Facades
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

// Components
import { SchedulePostCreateModalFormTextComponent } from '../schedule-post-create-modal-form text/schedule-post-create-modal-form-text.component';
import { SchedulePostCreateModalFormImageComponent } from '../schedule-post-create-modal-form-image/schedule-post-create-modal-form-image.component';
import { SchedulePostCreateModalFormVideoComponent } from '../schedule-post-create-modal-form-video/schedule-post-create-modal-form-video.component';
import { SchedulePostCreateModalFormTypeComponent } from '../schedule-post-create-modal-form-type/schedule-post-create-modal-form-type.component';

@Component({
  selector: 'buffer--schedule-post-create-modal-form',
  templateUrl: './schedule-post-create-modal-form.component.html',
  styleUrls: ['./schedule-post-create-modal-form.component.scss']
})
export class SchedulePostCreateModalFormComponent {
  postType$: Observable<POST_TYPE>;

  @ViewChild(SchedulePostCreateModalFormTypeComponent, { read: true, static: false })
  postTypeChooseStep: SchedulePostCreateModalFormTypeComponent;
  @ViewChild(SchedulePostCreateModalFormTextComponent, { read: true, static: false })
  postTypeTextStep: SchedulePostCreateModalFormTextComponent;
  @ViewChild(SchedulePostCreateModalFormImageComponent, { read: true, static: false })
  postTypeImageStep: SchedulePostCreateModalFormImageComponent;
  @ViewChild(SchedulePostCreateModalFormVideoComponent, { read: true, static: false })
  postTypeVideoStep: SchedulePostCreateModalFormVideoComponent;

  get eventCreateChooseTypeForm() {
    return this.postTypeChooseStep ? this.postTypeChooseStep.eventCreateChooseTypeForm : null;
  }

  get eventCreateTypeTextForm() {
    return this.postTypeTextStep ? this.postTypeTextStep.eventCreateTypeTextForm : null;
  }

  get eventCreateTypeImageForm() {
    return this.postTypeImageStep ? this.postTypeImageStep.eventCreateTypeImageForm : null;
  }

  get eventCreateTypeVideoForm() {
    return this.postTypeVideoStep ? this.postTypeVideoStep.eventCreateTypeVideoForm : null;
  }

  constructor(private scheduleFacade: ScheduleFacade) {
    this.postType$ = this.scheduleFacade.getPostType();
  }
}
