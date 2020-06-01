import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpParams } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService extends EntityCollectionServiceBase<I_CONNECTION> {
  constructor(
    private readonly httpService: HttpService,
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Connection', serviceElementsFactory);
  }

  getConnections(userID: string): Observable<I_CONNECTION[]> {
    return this.httpService
      .get<I_CONNECTION[]>('connection/connections', ({ userID } as unknown) as HttpParams)
      .pipe(
        tap((connections: I_CONNECTION[]) => {
          this.addManyToCache(connections);
        }),
      );
  }

  deleteConnection(connection: I_CONNECTION): Observable<I_CONNECTION> {
    return this.httpService.delete<I_CONNECTION>('connection/delete', connection.id).pipe(
      tap((conn: I_CONNECTION) => {
        this.removeOneFromCache(conn);
      }),
    );
  }
}
