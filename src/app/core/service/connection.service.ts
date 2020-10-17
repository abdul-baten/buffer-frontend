import { EConnectionType } from '../enum';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  first,
  map,
  mergeAll,
  switchMap,
  take,
  tap
} from 'rxjs/operators';
import { HttpService } from './http.service';
import { IConnection } from '../model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
    const connections_from_state$ = this.entities$;

    return connections_from_state$.pipe(switchMap((connections: IConnection[]) => {
      if (connections.length) {
        return of(connections);
      }

      return this.getConnectionsFromServer(user_id);
    }));
  }

  private getConnectionsFromServer (user_id: string): Observable<IConnection[]> {
    return this.httpService.
      get<IConnection[]>(`connection/${user_id}`).
      pipe(tap((connections: IConnection[]) => {
        if (connections.length) {
          this.upsertManyInCache(connections);
        }
      }));
  }

  public deleteConnection (connection: IConnection): Observable<IConnection> {
    const { id: connection_id, connection_user_id } = connection;

    return this.httpService.delete<IConnection>(`connection/${connection_id}/${connection_user_id}`).pipe(tap(() => {
      this.removeOneFromCache(connection);
    }));
  }

  public addConnectionToState (connection: IConnection): void {
    this.upsertOneInCache(connection);
  }

  public connectionsByType (connection_type: EConnectionType): Observable<IConnection[]> {
    return this.entities$.pipe(map((connections: IConnection[]) => connections.filter((connection: IConnection) => connection.connection_type === connection_type)));
  }

  public getFirstConnection (): Observable<IConnection> {
    return this.entities$.pipe(mergeAll(), take(1), first());
  }

  public getConnectionByID (id: string): Observable<IConnection> {
    return this.entities$.pipe(map((connections: IConnection[]) => connections.find((connection: IConnection) => connection.id === id) as IConnection));
  }
}
