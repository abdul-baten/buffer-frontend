// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Application Specific Modules

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { ScheduleEventCreateModalComponent } from './container/schedule-event-create-modal.component';
import { ScheduleEventCreateModalFormComponent } from './component/schedule-event-create-modal-form/schedule-event-create-modal-form.component';
import { ScheduleEventCreateModalFormTextComponent } from './component/schedule-event-create-modal-form text/schedule-event-create-modal-form-text.component';
import { ScheduleEventCreateModalFormImageComponent } from './component/schedule-event-create-modal-form-image/schedule-event-create-modal-form-image.component';
import { ScheduleEventCreateModalFormVideoComponent } from './component/schedule-event-create-modal-form-video/schedule-event-create-modal-form-video.component';

@NgModule({
  declarations: [
    ScheduleEventCreateModalComponent,
    ScheduleEventCreateModalFormComponent,
    ScheduleEventCreateModalFormTextComponent,
    ScheduleEventCreateModalFormImageComponent,
    ScheduleEventCreateModalFormVideoComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,

    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    TextFieldModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  exports: [ScheduleEventCreateModalComponent],
  entryComponents: [ScheduleEventCreateModalComponent]
})
export class ScheduleEventCreateModalModule {}
