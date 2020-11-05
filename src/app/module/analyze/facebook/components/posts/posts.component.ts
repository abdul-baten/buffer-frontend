import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { EFbInsightType } from 'src/app/core/enum';
import { FacebookFacade } from '../../facade/facebook.facade';
import { IConnectionSelected, IFbPostInsight } from 'src/app/core/model';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer-posts',
  styleUrls: ['./posts.component.css'],
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  public active_connection_id$: Observable<string>;
  public insight_type = EFbInsightType.POST;
  public posts$: Observable<IFbPostInsight>;
  public posts_chart$: Observable<IFbPostInsight>;

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookFacade) {
    this.active_connection_id$ = this.activatedRoute.paramMap.pipe(map((params: ParamMap) => params.get('id') as string));
    this.posts$ = this.active_connection_id$.pipe(
      switchMap((id: string) => this.facade.getInsightFromState<IFbPostInsight>(id, this.insight_type)),
      shareReplay(1)
    );
    this.posts_chart$ = this.active_connection_id$.pipe(
      switchMap((id: string) => this.facade.getInsightFromState<IFbPostInsight>(id, this.insight_type)),
      shareReplay(1)
    );
  }

  public engagementRate (engagement: number, impression: number): number {
    return Math.floor((engagement / impression) * Number.parseInt('100', 10));
  }

  public connectionSelected (connection: IConnectionSelected): void {
    const { id, type } = connection;

    this.facade.profileInsight(type as string, id);
  }
}
