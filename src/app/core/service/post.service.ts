import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';
import { I_POST } from '../model';
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
    const {
      postType,
      postStatus,
      postConnection: { connectionType },
    } = postInfo;
    const connType = connectionType?.split('_')[0].toLowerCase();
    const status = postStatus.toLowerCase();

    return this.httpService.post<I_POST>(`post/${postType}-${connType}-${status}`, postInfo).pipe(
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
    return this.entities$.pipe(map((posts: I_POST[]) => posts.filter((post: I_POST) => post.postConnection.id === connectionID)));
  }
}
