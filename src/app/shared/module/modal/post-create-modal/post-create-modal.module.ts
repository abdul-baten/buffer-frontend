import * as FilePond from 'filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { CommonModule } from '@angular/common';
import { FilePondModule } from 'ngx-filepond';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { postCreateFeatureKey, reducer } from './reducer/post-create.reducer';
import { PostCreateModalComponent } from './container/post-create-modal.component';
import { PostCreateModalFacade } from './facade/post-create-modal.facade';
import { PostCreateModalFormComponent } from './components/post-create-modal-form/post-create-modal-form.component';
import { PostCreateModalFormHeaderComponent } from './components/post-create-modal-form-header/post-create-modal-form-header.component';
import { PostCreateModalFormImageComponent } from './components/post-create-modal-form-image/post-create-modal-form-image.component';
import { PostCreateModalFormMediaSelectionComponent } from './components/post-create-modal-form-media-selection/post-create-modal-form-media-selection.component';
import { PostCreateModalFormTextComponent } from './components/post-create-modal-form-text/post-create-modal-form-text.component';
import { PostCreateModalFormTypeComponent } from './components/post-create-modal-form-type/post-create-modal-form-type.component';
import { PostCreateModalFormVideoComponent } from './components/post-create-modal-form-video/post-create-modal-form-video.component';
import { PostTypeImageService } from '@core/service/post-type-media-selection/post-type-image.service';
import { PostTypeVideoService } from '@core/service/post-type-media-selection/post-type-video.service';
import { StoreModule } from '@ngrx/store';

const FilePondPluginFileEncode = require('filepond-plugin-file-encode');
const FilePondPluginMediaPreview = require('filepond-plugin-media-preview');

FilePond.registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginMediaPreview,
);

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
    FilePondModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    MatTooltipModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    StoreModule.forFeature(postCreateFeatureKey, reducer),
  ],
  entryComponents: [PostCreateModalComponent],
  providers: [PostCreateModalFacade, PostTypeImageService, PostTypeVideoService],
})
export class PostCreateModalModule {}
