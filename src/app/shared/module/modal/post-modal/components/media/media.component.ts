import { Component, HostListener, OnDestroy } from '@angular/core';
import { defaultIfEmpty, filter, tap } from 'rxjs/operators';
import { E_POST_TYPE } from '@core/enum';
import { I_POST } from '@core/model';
import { noop } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--media',
  styleUrls: ['./media.component.scss'],
  templateUrl: './media.component.html',
})
export class MediaComponent implements OnDestroy {
  filePondOptions: any;
  postMedias: any[] = [];
  private subscriptions$ = new SubSink();

  constructor(private postCreateModalFacade: PostModalFacade) {
    const postType = this.postCreateModalFacade.getPostType().pipe(
      defaultIfEmpty(E_POST_TYPE.TEXT),
      filter((type: E_POST_TYPE) => type === E_POST_TYPE.IMAGE || type === E_POST_TYPE.VIDEO),
      tap((type: E_POST_TYPE) => {
        this.filePondOptions = this.postCreateModalFacade.generateDropZoneConfig(type);
      }),
    );
    this.subscriptions$.add(postType.subscribe(noop));

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostInfo().subscribe((postInfo: I_POST) => {
        const { postMedia } = postInfo;
        if (!!postMedia) {
          postMedia.forEach((media: any) => {
            this.postMedias.push({
              source: media,
              options: {
                type: 'local',
              },
            });
          });
        }
      }),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
