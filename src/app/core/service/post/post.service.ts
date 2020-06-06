import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpService } from '../http/http.service';
import { I_POST } from '@core/model';
import { Injectable } from '@angular/core';
import { NotificationService } from '../notification/notification.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService extends EntityCollectionServiceBase<I_POST> {
  constructor(
    private readonly httpService: HttpService,
    private readonly notificationService: NotificationService,
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Post', serviceElementsFactory);
  }

  addPost(postInfo: I_POST): Observable<I_POST> {
    return this.httpService.post<I_POST>('post/add', postInfo).pipe(
      tap((post: I_POST) => {
        if (post.id) {
          this.upsertOneInCache(post);
          this.notificationService.openSnackBar(`Your post has been ${post.postStatus}.`);
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
}
