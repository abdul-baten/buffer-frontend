import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import type { HttpService } from './http.service';
import type { IPost } from '../model';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService extends EntityCollectionServiceBase<IPost> {
  constructor (private readonly httpService: HttpService, public serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('post', serviceElementsFactory);
  }

  public addPost (post_info: IPost): Observable<IPost> {
    const {
      post_type,
      post_status,
      post_connection: { connection_type }
    } = post_info;
    const type = connection_type?.split('_')[0].toLowerCase();
    const status = post_status.toLowerCase();

    return this.httpService.post<IPost>(`post/${post_type}-${type}-${status}`, post_info).pipe(tap((post: IPost) => {
      if (post.id) {
        this.upsertOneInCache(post);
      }
    }));
  }

  public getPosts (user_id: string): Observable<IPost[]> {
    return this.httpService.
      get<IPost[]>('post/posts', { user_id }).
      pipe(tap((posts: IPost[]) => {
        if (posts.length) {
          this.upsertManyInCache(posts);
        }
      }));
  }

  public filterPostsByConnectionID (connection_id: string): Observable<IPost[]> {
    return this.entities$.pipe(map((posts: IPost[]) => posts.filter((post: IPost) => post.postConnection.id === connection_id)));
  }
}
