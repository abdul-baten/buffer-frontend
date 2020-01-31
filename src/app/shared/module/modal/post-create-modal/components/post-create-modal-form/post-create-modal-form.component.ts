// Core Modules
import { Component, ViewChild } from '@angular/core';

// Third Party Modules
import { Observable } from 'rxjs';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

// Enums
import { PostCreateModalFormTypeComponent } from '@shared/module/modal/post-create-modal/components/post-create-modal-form-type/post-create-modal-form-type.component';
import { PostCreateModalFormTextComponent } from '@shared/module/modal/post-create-modal/components/post-create-modal-form-text/post-create-modal-form-text.component';
import { PostCreateModalFormImageComponent } from '@shared/module/modal/post-create-modal/components/post-create-modal-form-image/post-create-modal-form-image.component';
import { PostCreateModalFormVideoComponent } from '@shared/module/modal/post-create-modal/components/post-create-modal-form-video/post-create-modal-form-video.component';
import { POST_TYPE } from '@core/enum/post/post-type.enum';

// Components

@Component({
  selector: 'buffer--post-create-modal-form',
  templateUrl: './post-create-modal-form.component.html',
  styleUrls: ['./post-create-modal-form.component.scss'],
})
export class PostCreateModalFormComponent {
  postType$: Observable<POST_TYPE>;

  @ViewChild(PostCreateModalFormTypeComponent, { read: true, static: false })
  postTypeChooseStep: PostCreateModalFormTypeComponent;
  @ViewChild(PostCreateModalFormTextComponent, { read: true, static: false })
  postTypeTextStep: PostCreateModalFormTextComponent;
  @ViewChild(PostCreateModalFormImageComponent, { read: true, static: false })
  postTypeImageStep: PostCreateModalFormImageComponent;
  @ViewChild(PostCreateModalFormVideoComponent, { read: true, static: false })
  postTypeVideoStep: PostCreateModalFormVideoComponent;

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
}
