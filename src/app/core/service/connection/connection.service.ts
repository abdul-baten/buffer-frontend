import { E_CONNECTION_TYPE } from '@core/enum';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { finalize, first, map, mergeAll, take, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService extends EntityCollectionServiceBase<I_CONNECTION> {
  constructor(private readonly httpService: HttpService, serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Connection', serviceElementsFactory);
  }

  getConnections(userID: string): Observable<I_CONNECTION[]> {
    this.setLoading(true);
    return this.httpService
      .get<I_CONNECTION[]>('connection/connections', ({ userID } as unknown) as HttpParams)
      .pipe(
        tap((connections: I_CONNECTION[]) => {
          if (!!connections.length) {
            this.upsertManyInCache(connections);
          }
        }),
        finalize(() => this.setLoading(false)),
      );
  }

  deleteConnection(connection: I_CONNECTION): Observable<I_CONNECTION> {
    return this.httpService.delete<I_CONNECTION>('connection/delete', connection.id).pipe(
      tap((conn: I_CONNECTION) => {
        this.removeOneFromCache(conn);
      }),
    );
  }

  addConnectionToState(connection: I_CONNECTION): void {
    this.upsertOneInCache(connection);
  }

  connectionsByType(connectionType: E_CONNECTION_TYPE): Observable<I_CONNECTION[]> {
    return this.entities$.pipe(
      map((connections: I_CONNECTION[]) => {
        return connections.filter((connection: I_CONNECTION) => connection.connectionType === connectionType);
      }),
    );
  }

  getFirstConnection(): Observable<I_CONNECTION> {
    return this.entities$.pipe(mergeAll(), take(1), first());
  }

  getConnectionByID(id: string): Observable<I_CONNECTION> {
    this.setLoading(true);
    return this.entities$.pipe(
      map((connections: I_CONNECTION[]) => {
        return connections.find((connection: I_CONNECTION) => connection.id === id);
      }),
      finalize(() => this.setLoading(false)),
    );
  }
}
