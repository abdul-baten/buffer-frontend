import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpService } from '../http/http.service';
import { I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EntityCollectionServiceBase<I_USER> {
  constructor(
    private readonly httpService: HttpService,
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('User', serviceElementsFactory);
  }

  getUserInfo(): Observable<I_USER> {
    return this.httpService.get<I_USER>('connection/connections').pipe(
      tap((user: I_USER) => {
        this.upsertOneInCache(user);
      }),
    );
  }
}
