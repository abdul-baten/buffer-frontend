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
import { DialogService } from 'primeng/dynamicdialog';
import { FilePondModule } from 'ngx-filepond';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './components/image/image.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MediaComponent } from './components/media/media.component';
import { NgModule } from '@angular/core';
import { PostModalComponent } from './container/post-modal.component';
import { PostModalFacade } from './facade/post-modal.facade';
import { PostTypeImageService, PostTypeVideoService } from 'src/app/core/service';
import { RouterModule } from '@angular/router';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
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
  declarations: [ConnectionsComponent, ImageComponent, MediaComponent, PostModalComponent, TextComponent, TypeComponent, VideoComponent],
  imports: [
    ButtonModule,
    CalendarModule,
    CarouselModule,
    CommonModule,
    FilePondModule,
    FormsModule,
    InputTextareaModule,
    LazyLoadImageModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    TabViewModule,
    StepsModule,
  ],
  providers: [PostModalFacade, PostTypeImageService, PostTypeVideoService, DialogService],
})
export class PostModalModule {}
