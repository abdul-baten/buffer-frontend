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
import { MediaUploadService } from 'src/app/core/service/media-upload.service';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MediaUploadService],
  selector: 'buffer-media',
  styleUrls: ['./media.component.css'],
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnChanges, OnDestroy {
  @Input() post_type: EPostType = EPostType.IMAGE;
  @Input() file_pond_options = {};
  public post_medias: string[] = [];
  private subscription$ = new Subscription();
  public options;

  constructor (private readonly mediaUploadService: MediaUploadService) {
    this.options = this.mediaUploadService.generateConfig();

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
    Object.assign(this.options, { ...changes?.file_pond_options?.currentValue });
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
