import { EFbInsightType } from '../enum';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpService } from './http.service';
import { IFbInsight, IFbInsightPayload } from '../model';
import { Injectable } from '@angular/core';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacebookInsightService extends EntityCollectionServiceBase<IFbInsight> {
  constructor (private readonly httpService: HttpService, public serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('facebook_insight', serviceElementsFactory);
  }

  public getInsightsFromServer<T> (payload: IFbInsightPayload, insight_type: EFbInsightType): Observable<T> {
    const insight_response$ = this.httpService.post<T>(`facebook-insight/${insight_type}`, payload);

    return insight_response$.pipe(
      tap((insight: T) => {
        const { id } = payload;

        this.upsertOneInCache({
          id,
          [insight_type]: insight
        });
      }),
      shareReplay(1)
    );
  }

  public getInsightFromState<T> (id: string, insight_type: EFbInsightType): Observable<T> {
    return this.entities$.pipe(
      map((connections: IFbInsight[]) => connections.find((insight: IFbInsight) => insight.id === id) as unknown as IFbInsight),
      map((insight: IFbInsight) => insight[insight_type as never] as unknown as T)
    );
  }
}
