import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  first,
  map,
  mergeAll,
  take,
  tap
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import type { EConnectionType } from '../enum';
import type { HttpService } from './http.service';
import type { IConnection } from '../model';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService extends EntityCollectionServiceBase<IConnection> {
  constructor (
    private readonly httpService: HttpService,
    public serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('connection', serviceElementsFactory);
  }

  public getConnections (user_id: string): Observable<IConnection[]> {
    return this.httpService.
      get<IConnection[]>('connection/connections', { user_id }).
      pipe(tap((connections: IConnection[]) => {
        if (connections.length) {
          this.upsertManyInCache(connections);
        }
      }));
  }

  deleteConnection (connection: IConnection): Observable<IConnection> {
    const { id } = connection;

    return this.httpService.delete<IConnection>('connection/delete', id).pipe(tap(() => {
      this.removeOneFromCache(connection);
    }));
  }

  addConnectionToState (connection: IConnection): void {
    this.upsertOneInCache(connection);
  }

  connectionsByType (connection_type: EConnectionType): Observable<IConnection[]> {
    return this.entities$.pipe(map((connections: IConnection[]) => connections.filter((connection: IConnection) => connection.connection_type === connection_type)));
  }

  getFirstConnection (): Observable<IConnection> {
    return this.entities$.pipe(mergeAll(), take(1), first());
  }

  getConnectionByID (id: string): Observable<IConnection> {
    return this.entities$.pipe(map((connections: IConnection[]) => connections.find((connection: IConnection) => connection.id === id) as IConnection));
  }
}
