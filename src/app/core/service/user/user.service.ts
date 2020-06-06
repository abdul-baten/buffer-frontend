import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { first, mergeAll, take, tap } from 'rxjs/operators';
import { HttpService } from '../http/http.service';
import { I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EntityCollectionServiceBase<I_USER> {
  constructor(private readonly httpService: HttpService, serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('User', serviceElementsFactory);
  }

  getUser(): Observable<I_USER> {
    return this.httpService.get<I_USER>('user/get').pipe(
      tap((user: I_USER) => {
        this.upsertOneInCache(user);
      }),
    );
  }

  getUserFromState(): Observable<I_USER> {
    return this.entities$.pipe(mergeAll(), take(1), first());
  }

  addUserToState(user: I_USER): void {
    this.upsertOneInCache(user);
  }
}
