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

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookFacade) {
    this.active_connection_id$ = this.activatedRoute.paramMap.pipe(map((params: ParamMap) => params.get('id') as string));
    this.posts$ = this.active_connection_id$.pipe(
      switchMap((id: string) => this.facade.getInsightFromState<IFbPostInsight>(id, this.insight_type)),
      shareReplay(1)
    );
  }

  private totalCount (input: number[]): number {
    return input && input.length > 0 ? input.reduce((acc, num) => acc + num) : 0;
  }

  public engagementRate (engagements: number[] = [0], impressions: number[] = [0]): number {
    const engagement = this.totalCount(engagements);
    const impression = this.totalCount(impressions);

    return Math.floor((engagement / impression) * Number.parseInt('100', 10));
  }

  public connectionSelected (connection: IConnectionSelected): void {
    const { id, type } = connection;

    this.facade.profileInsight(type as string, id);
  }
}
