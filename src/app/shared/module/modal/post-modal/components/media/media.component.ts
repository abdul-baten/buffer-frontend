import { ChangeDetectionStrategy, Component, HostListener, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { E_POST_TYPE } from '@core/enum';
import { I_POST } from '@core/model';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { SubSink } from 'subsink';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--media',
  styleUrls: ['./media.component.scss'],
  templateUrl: './media.component.html',
})
export class MediaComponent implements OnChanges, OnDestroy {
  filePondOptions = {};
  postMedias: any[] = [];
  private subscriptions$ = new SubSink();
  @Input() postType: E_POST_TYPE;

  constructor(private postCreateModalFacade: PostModalFacade) {
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

  ngOnChanges(changes: SimpleChanges) {
    this.postType = changes.postType.currentValue;
    this.filePondOptions = this.postCreateModalFacade.generateDropZoneConfig(this.postType);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
