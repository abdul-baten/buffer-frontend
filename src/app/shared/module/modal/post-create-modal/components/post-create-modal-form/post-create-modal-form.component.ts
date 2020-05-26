import { Component, ViewChild } from '@angular/core';
import { E_POST_TYPE } from '@core/enum';
import { Observable } from 'rxjs';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';
import { PostCreateModalFormImageComponent } from '@shared/module/modal/post-create-modal/components/post-create-modal-form-image/post-create-modal-form-image.component';
import { PostCreateModalFormTextComponent } from '@shared/module/modal/post-create-modal/components/post-create-modal-form-text/post-create-modal-form-text.component';
import { PostCreateModalFormTypeComponent } from '@shared/module/modal/post-create-modal/components/post-create-modal-form-type/post-create-modal-form-type.component';
import { PostCreateModalFormVideoComponent } from '@shared/module/modal/post-create-modal/components/post-create-modal-form-video/post-create-modal-form-video.component';

@Component({
  selector: 'buffer--post-create-modal-form',
  styleUrls: ['./post-create-modal-form.component.scss'],
  templateUrl: './post-create-modal-form.component.html',
})
export class PostCreateModalFormComponent {
  postType$: Observable<E_POST_TYPE>;

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

  constructor(private postCreateModalFacade: PostCreateModalFacade) {
    this.postType$ = this.postCreateModalFacade.getPostType();
  }
}
