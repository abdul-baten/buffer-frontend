// Core Modules
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

// Third Party Modules
import { Observable } from 'rxjs';

// Enums
import { POST_TYPE } from 'src/app/module/schedule/enum/schedule-event-create-modal.enum';

// Facades
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

// Components
import { ScheduleEventCreateModalFormTextComponent } from '../schedule-event-create-modal-form text/schedule-event-create-modal-form-text.component';
import { ScheduleEventCreateModalFormImageComponent } from '../schedule-event-create-modal-form-image/schedule-event-create-modal-form-image.component';
import { ScheduleEventCreateModalFormVideoComponent } from '../schedule-event-create-modal-form-video/schedule-event-create-modal-form-video.component';
import { ScheduleEventCreateModalFormTypeComponent } from '../schedule-event-create-modal-form-type/schedule-event-create-modal-form-type.component';

@Component({
  selector: 'buffer--schedule-event-create-modal-form',
  templateUrl: './schedule-event-create-modal-form.component.html',
  styleUrls: ['./schedule-event-create-modal-form.component.scss']
})
export class ScheduleEventCreateModalFormComponent {
  postType$: Observable<POST_TYPE>;

  @Output() closeChooseTypeModal = new EventEmitter<any>();

  @ViewChild(ScheduleEventCreateModalFormTypeComponent, { read: true, static: false })
  postTypeChooseStep: ScheduleEventCreateModalFormTypeComponent;
  @ViewChild(ScheduleEventCreateModalFormTextComponent, { read: true, static: false })
  postTypeTextStep: ScheduleEventCreateModalFormTextComponent;
  @ViewChild(ScheduleEventCreateModalFormImageComponent, { read: true, static: false })
  postTypeImageStep: ScheduleEventCreateModalFormImageComponent;
  @ViewChild(ScheduleEventCreateModalFormVideoComponent, { read: true, static: false })
  postTypeVideoStep: ScheduleEventCreateModalFormVideoComponent;

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

  onChooseTypeModalClosed(): void {
    this.closeChooseTypeModal.emit();
  }
}
