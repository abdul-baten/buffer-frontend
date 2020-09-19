import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpParams } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { I_POST } from '@core/model';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService extends EntityCollectionServiceBase<I_POST> {
  constructor(private readonly httpService: HttpService, serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Post', serviceElementsFactory);
  }

  addPost(postInfo: I_POST): Observable<I_POST> {
    return this.httpService.post<I_POST>('post/add', postInfo).pipe(
      tap((post: I_POST) => {
        if (post.id) {
          this.upsertOneInCache(post);
        }
      }),
    );
  }

  getPosts(userID: string): Observable<I_POST[]> {
    return this.httpService
      .get<I_POST[]>('post/posts', ({ userID } as unknown) as HttpParams)
      .pipe(
        tap((posts: I_POST[]) => {
          if (!!posts.length) {
            this.upsertManyInCache(posts);
          }
        }),
      );
  }

  filterPostsByConnectionID(connectionID: string): Observable<I_POST[]> {
    return this.entities$.pipe(
      tap(console.warn),
      map((posts: I_POST[]) => posts.filter((post: I_POST) => post.postConnection.id === connectionID)),
      tap(console.warn),
    );
  }
}
