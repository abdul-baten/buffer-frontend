import { ChangeDetectionStrategy, Component, HostListener, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { EPostType } from 'src/app/core/enum';
import { IPost } from 'src/app/core/model';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-media',
  styleUrls: ['./media.component.css'],
  templateUrl: './media.component.html',
})
export class MediaComponent implements OnChanges, OnDestroy {
  @Input() postType: EPostType = EPostType.IMAGE;
  filePondOptions = {};
  postMedias: any[] = [];
  private subscription$ = new Subscription();

  constructor(private postCreateModalFacade: PostModalFacade) {
    this.subscription$.add(
      this.postCreateModalFacade.getPostInfo().subscribe((postInfo: IPost) => {
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

  ngOnChanges(changes: SimpleChanges): void {
    this.postType = changes.postType.currentValue;
    this.filePondOptions = this.postCreateModalFacade.generateDropZoneConfig(this.postType);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
