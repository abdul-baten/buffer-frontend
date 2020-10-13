import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import type { Observable } from 'rxjs';
import type { HttpService } from './http.service';
import type { IFbInsightPayload, IInstaInsight } from '../model';

@Injectable({
  providedIn: 'root'
})
export class InstagramInsightService extends EntityCollectionServiceBase<IInstaInsight> {
  constructor (private readonly httpService: HttpService, public serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('instagram_insight', serviceElementsFactory);
  }

  public getInsights (payload: IFbInsightPayload): Observable<IInstaInsight> {
    const overview$ = this.httpService.post<IInstaInsight>('insight/instagram/overview', (payload as unknown) as IInstaInsight);

    return overview$.pipe(tap((insight: IInstaInsight) => {
      this.upsertOneInCache(insight);
    }));
  }

  public fbInsightFromState (id: string): Observable<IInstaInsight> {
    return this.entities$.pipe(map((connections: IInstaInsight[]) => connections.find((insight: IInstaInsight) => insight.id === id) as IInstaInsight));
  }
}
