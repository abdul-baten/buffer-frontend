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
    DropzoneModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
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
