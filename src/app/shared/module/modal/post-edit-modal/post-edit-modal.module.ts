import { CommonModule } from '@angular/common';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PostEditModalComponent } from './container/post-edit-modal.component';
import { PostEditModalFormComponent } from './components/post-edit-modal-form/post-edit-modal-form.component';
import { PostEditModalFormHeaderComponent } from './components/post-edit-modal-form-header/post-edit-modal-form-header.component';
import { PostEditModalFormImageComponent } from './components/post-edit-modal-form-image/post-edit-modal-form-image.component';
import { PostEditModalFormMediaSelectionComponent } from './components/post-edit-modal-form-media-selection/post-edit-modal-form-media-selection.component';
import { PostEditModalFormTextComponent } from './components/post-edit-modal-form-text/post-edit-modal-form-text.component';
import { PostEditModalFormVideoComponent } from './components/post-edit-modal-form-video/post-edit-modal-form-video.component';

@NgModule({
  declarations: [
    PostEditModalComponent,
    PostEditModalFormComponent,
    PostEditModalFormHeaderComponent,
    PostEditModalFormImageComponent,
    PostEditModalFormMediaSelectionComponent,
    PostEditModalFormTextComponent,
    PostEditModalFormVideoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,

    MatButtonModule,
    MatProgressSpinnerModule,

    MatTooltipModule,

    DropzoneModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  entryComponents: [PostEditModalComponent],
})
export class PostEditModalModule {}
