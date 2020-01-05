// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Application Specific Modules
import { EventPropagationDirectiveModule } from '@core/directive/event-propagation/event-propagation.directive.module';

// Third Party Modules
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

// Facades

// Components
import { ScheduleEventCreateModalComponent } from './container/schedule-event-create-modal.component';
import { ScheduleEventCreateModalFormComponent } from './component/schedule-event-create-modal-form/schedule-event-create-modal-form.component';
import { ScheduleEventCreateModalFormTextComponent } from './component/schedule-event-create-modal-form text/schedule-event-create-modal-form-text.component';
import { ScheduleEventCreateModalFormImageComponent } from './component/schedule-event-create-modal-form-image/schedule-event-create-modal-form-image.component';
import { ScheduleEventCreateModalFormVideoComponent } from './component/schedule-event-create-modal-form-video/schedule-event-create-modal-form-video.component';
import { ScheduleEventCreateModalFormTypeComponent } from './component/schedule-event-create-modal-form-type/schedule-event-create-modal-form-type.component';
import { ScheduleEventCreateModalFormHeaderComponent } from './component/schedule-event-create-modal-form-header/schedule-event-create-modal-form-header.component';
import { ScheduleEventCreateModalFormMediaSelectionComponent } from './component/schedule-event-create-modal-form-media-selection/schedule-event-create-modal-form-media-selection.component';

// Store

@NgModule({
  declarations: [
    ScheduleEventCreateModalComponent,
    ScheduleEventCreateModalFormComponent,
    ScheduleEventCreateModalFormTypeComponent,
    ScheduleEventCreateModalFormTextComponent,
    ScheduleEventCreateModalFormImageComponent,
    ScheduleEventCreateModalFormVideoComponent,
    ScheduleEventCreateModalFormHeaderComponent,
    ScheduleEventCreateModalFormMediaSelectionComponent
  ],
  imports: [
    // Core Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Material Modules
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    DropzoneModule,
    MatButtonModule,
    MatDialogModule,
    TextFieldModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,

    OwlDateTimeModule,
    OwlNativeDateTimeModule,

    EventPropagationDirectiveModule
  ],
  providers: [],
  exports: [ScheduleEventCreateModalComponent],
  entryComponents: [ScheduleEventCreateModalComponent]
})
export class ScheduleEventCreateModalModule {}
