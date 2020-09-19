import { Component, ViewChild } from '@angular/core';
import { E_POST_TYPE } from '@core/enum';
import { ImageComponent } from '@shared/module/modal/post-modal/components/image/image.component';
import { Observable } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { TextComponent } from '@shared/module/modal/post-modal/components/text/text.component';
import { TypeComponent } from '@shared/module/modal/post-modal/components/type/type.component';
import { VideoComponent } from '@shared/module/modal/post-modal/components/video/video.component';

@Component({
  selector: 'buffer--form',
  styleUrls: ['./form.component.scss'],
  templateUrl: './form.component.html',
})
export class FormComponent {
  postType$: Observable<E_POST_TYPE>;

  @ViewChild(TypeComponent, { read: true })
  postTypeChooseStep: TypeComponent;
  @ViewChild(TextComponent, { read: true })
  postTypeTextStep: TextComponent;
  @ViewChild(ImageComponent, { read: true })
  postTypeImageStep: ImageComponent;
  @ViewChild(VideoComponent, { read: true })
  postTypeVideoStep: VideoComponent;

  get eventCreateChooseTypeForm() {
    return this.postTypeChooseStep ? this.postTypeChooseStep.typeForm : null;
  }

  get eventCreateTypeTextForm() {
    return this.postTypeTextStep ? this.postTypeTextStep.textForm : null;
  }

  get eventCreateTypeImageForm() {
    return this.postTypeImageStep ? this.postTypeImageStep.imageForm : null;
  }

  get eventCreateTypeVideoForm() {
    return this.postTypeVideoStep ? this.postTypeVideoStep.videoForm : null;
  }

  constructor(private postCreateModalFacade: PostModalFacade) {
    this.postType$ = this.postCreateModalFacade.getPostType();
  }
}
