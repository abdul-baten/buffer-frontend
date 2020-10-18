import {
  map,
  shareReplay,
  tap
} from 'rxjs/operators';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { forkJoin, Observable } from 'rxjs';
import { HttpService } from './http.service';
import {
  IFbInsight,
  IFbInsightPayload,
  IFbOverviewInsight,
  IFbPerformanceInsight,
  IFbPostInsight,
  IFbVideoInsight
} from '../model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacebookInsightService extends EntityCollectionServiceBase<IFbInsight> {
  constructor (private readonly httpService: HttpService, public serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('facebook_insight', serviceElementsFactory);
  }

  public getInsights (payload: IFbInsightPayload): Observable<IFbInsight> {
    const overview$ = this.httpService.post<IFbOverviewInsight>('facebook-insight/overview', payload);
    const performance$ = this.httpService.post<IFbPerformanceInsight>('facebook-insight/performance', payload);
    const posts$ = this.httpService.post<IFbPostInsight>('facebook-insight/posts', payload);
    const videos$ = this.httpService.post<IFbVideoInsight>('facebook-insight/videos', payload);

    return forkJoin({
      overview: overview$,
      performance: performance$,
      posts: posts$,
      videos: videos$
    }).pipe(
      tap(({ overview, performance, posts, videos }: IFbInsight) => {
        const { id } = payload;

        this.upsertOneInCache({
          id,
          overview,
          performance,
          posts,
          videos
        });
      }),
      shareReplay(1)
    );
  }

  public getInsightFromState (id: string): Observable<IFbInsight> {
    return this.entities$.pipe(map((connections: IFbInsight[]) => connections.find((insight: IFbInsight) => insight.id === id) as IFbInsight));
  }
}
