import { CommonModule } from '@angular/common';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PostCreateModalComponent } from './container/post-create-modal.component';
import { PostCreateModalFormComponent } from './components/post-create-modal-form/post-create-modal-form.component';
import { PostCreateModalFormHeaderComponent } from './components/post-create-modal-form-header/post-create-modal-form-header.component';
import { PostCreateModalFormImageComponent } from './components/post-create-modal-form-image/post-create-modal-form-image.component';
import { PostCreateModalFormMediaSelectionComponent } from './components/post-create-modal-form-media-selection/post-create-modal-form-media-selection.component';
import { PostCreateModalFormTextComponent } from './components/post-create-modal-form-text/post-create-modal-form-text.component';
import { PostCreateModalFormTypeComponent } from './components/post-create-modal-form-type/post-create-modal-form-type.component';
import { PostCreateModalFormVideoComponent } from './components/post-create-modal-form-video/post-create-modal-form-video.component';

@NgModule({
  declarations: [
    PostCreateModalComponent,
    PostCreateModalFormComponent,
    PostCreateModalFormHeaderComponent,
    PostCreateModalFormImageComponent,
    PostCreateModalFormMediaSelectionComponent,
    PostCreateModalFormTextComponent,
    PostCreateModalFormTypeComponent,
    PostCreateModalFormVideoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,

    MatInputModule,
    MatRadioModule,

    MatButtonModule,
    MatProgressSpinnerModule,

    MatTooltipModule,
    MatStepperModule,

    DropzoneModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  entryComponents: [PostCreateModalComponent],
})
export class PostCreateModalModule {}
