import { ActivatedRoute, ParamMap } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EFbInsightType } from 'src/app/core/enum';
import { FacebookFacade } from '../../facade/facebook.facade';
import { IConnectionSelected, IFbVideoInsight } from 'src/app/core/model';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-video',
  styleUrls: ['./video.component.css'],
  templateUrl: './video.component.html'
})
export class VideoComponent {
  public active_connection_id$: Observable<string>;
  public insight_type = EFbInsightType.VIDEO;
  public videos$: Observable<IFbVideoInsight>;

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookFacade) {
    this.active_connection_id$ = this.activatedRoute.paramMap.pipe(map((params: ParamMap) => params.get('id') as string));
    this.videos$ = this.active_connection_id$.pipe(
      switchMap((id: string) => this.facade.getInsightFromState<IFbVideoInsight>(id, this.insight_type)),
      shareReplay(1)
    );
  }

  public connectionSelected (connection: IConnectionSelected): void {
    const { id, type } = connection;

    this.facade.profileInsight(type as string, id);
  }
}
