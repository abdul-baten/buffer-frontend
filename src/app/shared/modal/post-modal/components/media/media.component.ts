import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { EPostType } from 'src/app/core/enum';
import { Subscription } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-media',
  styleUrls: ['./media.component.css'],
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnChanges, OnDestroy {
  @Input() post_type: EPostType = EPostType.IMAGE;
  public file_pond_options = {};
  public post_medias: string[] = [];
  private subscription$ = new Subscription();

  constructor (private readonly facade: PostModalFacade) {

    /*
     * This.subscription$.add(this.facade.getPostInfo().subscribe((post_info: IPost) => {
     *   const { post_media } = post_info;
     */

    /*
     *   If (post_media) {
     *     post_media.forEach((media: any) => {
     *       this.post_medias.push({
     *         options: {
     *           type: 'local'
     *         },
     *         source: media
     *       });
     *     });
     *   }
     * }));
     */
  }

  ngOnChanges (changes: SimpleChanges): void {
    this.post_type = changes.post_type.currentValue;
    this.file_pond_options = this.facade.generateDropZoneConfig(this.post_type);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
