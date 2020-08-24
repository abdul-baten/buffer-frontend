import * as FilePond from 'filepond';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FilePondModule } from 'ngx-filepond';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { PostCreateModalComponent } from './container/post-create-modal.component';
import { PostCreateModalFacade } from './facade/post-create-modal.facade';
import { PostCreateModalFormComponent } from './components/post-create-modal-form/post-create-modal-form.component';
import { PostCreateModalFormConnectionSelectionComponent } from './components/post-create-modal-form-connection-selection/post-create-modal-form-connection-selection.component';
import { PostCreateModalFormImageComponent } from './components/post-create-modal-form-image/post-create-modal-form-image.component';
import { PostCreateModalFormMediaSelectionComponent } from './components/post-create-modal-form-media-selection/post-create-modal-form-media-selection.component';
import { PostCreateModalFormTextComponent } from './components/post-create-modal-form-text/post-create-modal-form-text.component';
import { PostCreateModalFormTypeComponent } from './components/post-create-modal-form-type/post-create-modal-form-type.component';
import { PostCreateModalFormVideoComponent } from './components/post-create-modal-form-video/post-create-modal-form-video.component';
import { PostTypeImageService } from '@core/service/post-type-media-selection/post-type-image.service';
import { PostTypeVideoService } from '@core/service/post-type-media-selection/post-type-video.service';
import { RouterModule } from '@angular/router';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';

const FilePondPluginFileEncode = require('filepond-plugin-file-encode');
const FilePondPluginMediaPreview = require('filepond-plugin-media-preview');

FilePond.registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginMediaPreview,
);

@NgModule({
  declarations: [
    PostCreateModalComponent,
    PostCreateModalFormComponent,
    PostCreateModalFormConnectionSelectionComponent,
    PostCreateModalFormImageComponent,
    PostCreateModalFormMediaSelectionComponent,
    PostCreateModalFormTextComponent,
    PostCreateModalFormTypeComponent,
    PostCreateModalFormVideoComponent,
  ],
  entryComponents: [PostCreateModalComponent],
  imports: [
    ButtonModule,
    CalendarModule,
    CarouselModule,
    CommonModule,
    FilePondModule,
    FormsModule,
    InputTextareaModule,
    LoaderModule,
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    TooltipModule,
  ],
  providers: [PostCreateModalFacade, PostTypeImageService, PostTypeVideoService, DynamicDialogRef],
})
export class PostCreateModalModule {}
