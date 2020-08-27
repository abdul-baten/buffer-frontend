import * as FilePond from 'filepond';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ConnectionsComponent } from './components/connections/connections.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FilePondModule } from 'ngx-filepond';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './components/image/image.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MediaComponent } from './components/media/media.component';
import { NgModule } from '@angular/core';
import { PostModalComponent } from './container/post-modal.component';
import { PostModalFacade } from './facade/post-modal.facade';
import { PostTypeImageService } from '@core/service/post-type-media-selection/post-type-image.service';
import { PostTypeVideoService } from '@core/service/post-type-media-selection/post-type-video.service';
import { RouterModule } from '@angular/router';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TextComponent } from './components/text/text.component';
import { TypeComponent } from './components/type/type.component';
import { VideoComponent } from './components/video/video.component';

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
    ConnectionsComponent,
    FormComponent,
    ImageComponent,
    MediaComponent,
    PostModalComponent,
    TextComponent,
    TypeComponent,
    VideoComponent,
  ],
  entryComponents: [PostModalComponent],
  imports: [
    ButtonModule,
    CalendarModule,
    CarouselModule,
    CommonModule,
    FilePondModule,
    FormsModule,
    InputTextareaModule,
    LazyLoadImageModule,
    LoaderModule,
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
  ],
  providers: [PostModalFacade, PostTypeImageService, PostTypeVideoService, DynamicDialogRef],
})
export class PostModalModule {}
