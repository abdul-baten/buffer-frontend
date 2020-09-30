import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { forkJoin, Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { I_FB_INS_PAYLOAD, I_FB_OVERVIEW, I_FB_PERFORMANCE, I_FB_POSTS, I_FB_VIDEOS, I_INS_FB, I_INSIGHT } from '@core/model';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InsightService extends EntityCollectionServiceBase<I_INSIGHT> {
  constructor(private readonly httpService: HttpService, serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Insight', serviceElementsFactory);
  }

  getFBInsights(payload: I_FB_INS_PAYLOAD): Observable<I_INS_FB> {
    const overview$ = this.httpService.post<I_FB_OVERVIEW>('insight/facebook/overview', (payload as unknown) as I_FB_OVERVIEW);
    const posts$ = this.httpService.post<I_FB_POSTS>('insight/facebook/posts', (payload as unknown) as I_FB_POSTS);
    const videos$ = this.httpService.post<I_FB_VIDEOS>('insight/facebook/videos', (payload as unknown) as I_FB_VIDEOS);
    const performance$ = this.httpService.post<I_FB_PERFORMANCE>('insight/facebook/performance', (payload as unknown) as I_FB_PERFORMANCE);

    return forkJoin({ overview: overview$, posts: posts$, videos: videos$, performance: performance$ }).pipe(
      tap(({ overview, posts, videos, performance }: I_INS_FB) => {
        const { id } = overview;
        this.upsertOneInCache({ id, overview, posts, videos, performance });
      }),
    );
  }

  getIGInsights(payload: I_FB_INS_PAYLOAD): Observable<I_INSIGHT> {
    return this.httpService.post<I_INSIGHT>('insight/instagram', (payload as unknown) as I_INSIGHT).pipe(
      tap((insightData: I_INSIGHT) => {
        this.upsertOneInCache(insightData);
      }),
    );
  }

  fbInsightFromState(id: string): Observable<I_INSIGHT> {
    return this.entities$.pipe(
      map((connections: I_INSIGHT[]) => {
        return connections.find((insight: any) => insight.id === id);
      }),
    );
  }
}
