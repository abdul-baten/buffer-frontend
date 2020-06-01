import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpService } from '../http/http.service';
import { I_POST } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService extends EntityCollectionServiceBase<I_POST> {
  constructor(
    private readonly httpService: HttpService,
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Post', serviceElementsFactory);
  }

  addPost(postInfo: I_POST): Observable<I_POST> {
    return this.httpService.post<I_POST>('post/add', postInfo).pipe(
      tap((post: I_POST) => {
        this.upsertOneInCache(post);
      }),
    );
  }
}
