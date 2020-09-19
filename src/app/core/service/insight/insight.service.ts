import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpService } from '../http/http.service';
import { I_FB_INSIGHT_PAYLOAD, I_INSIGHT } from '@core/model';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InsightService extends EntityCollectionServiceBase<I_INSIGHT> {
  constructor(private readonly httpService: HttpService, serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Insight', serviceElementsFactory);
  }

  getInsights(payload: I_FB_INSIGHT_PAYLOAD): Observable<I_INSIGHT> {
    const insightFromServer$ = this.getInsightFromServer(payload);
    return insightFromServer$;
  }

  getInsightFromState(id: string): Observable<I_INSIGHT> {
    return this.entities$.pipe(
      map((connections: I_INSIGHT[]) => {
        return connections.find((insight: any) => insight.id === id);
      }),
    );
  }

  getInsightFromServer(payload: I_FB_INSIGHT_PAYLOAD): Observable<I_INSIGHT> {
    return this.httpService.post<I_INSIGHT>('insight/facebook', (payload as unknown) as I_INSIGHT).pipe(
      tap((insightData: I_INSIGHT) => {
        this.upsertOneInCache(insightData);
      }),
    );
  }
}
