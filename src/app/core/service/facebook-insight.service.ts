import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { forkJoin, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import type { HttpService } from './http.service';
import type { IFbInsightPayload, IFbInsight, IFbOverviewInsight, IFbPerformanceInsight, IFbPostInsight, IFbVideoInsight } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FacebookInsightService extends EntityCollectionServiceBase<IFbInsight> {
  constructor (private readonly httpService: HttpService, public serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('facebook_insight', serviceElementsFactory);
  }

  public getInsights (payload: IFbInsightPayload): Observable<IFbInsight> {
    const overview$ = this.httpService.post<IFbOverviewInsight>('insight/facebook/overview', (payload as unknown) as IFbOverviewInsight);
    const performance$ = this.httpService.post<IFbPerformanceInsight>('insight/facebook/performance', (payload as unknown) as IFbPerformanceInsight);
    const posts$ = this.httpService.post<IFbPostInsight>('insight/facebook/posts', (payload as unknown) as IFbPostInsight);
    const videos$ = this.httpService.post<IFbVideoInsight>('insight/facebook/videos', (payload as unknown) as IFbVideoInsight);

    return forkJoin({
      overview: overview$,
      performance: performance$,
      posts: posts$,
      videos: videos$
    }).pipe(tap(({ overview, performance, posts, videos }: IFbInsight) => {
      const { id } = overview as IFbOverviewInsight;

      this.upsertOneInCache({
        id,
        overview,
        performance,
        posts,
        videos
      });
    }));
  }

  public fbInsightFromState (id: string): Observable<IFbInsight> {
    return this.entities$.pipe(map((connections: IFbInsight[]) => connections.find((insight: IFbInsight) => insight.id === id) as IFbInsight));
  }
}
