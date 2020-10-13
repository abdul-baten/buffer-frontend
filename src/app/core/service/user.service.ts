import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  first,
  mergeAll,
  take,
  tap
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import type { HttpService } from './http.service';
import type { IUser } from '../model';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<IUser> {
  constructor (private readonly httpService: HttpService, public serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('user', serviceElementsFactory);
  }

  public getUser (): Observable<IUser> {
    return this.httpService.get<IUser>('user/get').pipe(tap((user: IUser) => {
      this.upsertOneInCache(user);
    }));
  }

  public getUserFromState (): Observable<IUser> {
    return this.entities$.pipe(mergeAll(), take(1), first());
  }

  public addUserToState (user: IUser): void {
    this.upsertOneInCache(user);
  }
}
