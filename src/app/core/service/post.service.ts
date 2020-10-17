import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { IPost } from '../model';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

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

  public getPosts (post_user_id: string): Observable<IPost[]> {
    const posts_from_state$ = this.entities$;

    return posts_from_state$.pipe(switchMap((posts: IPost[]) => {
      if (posts.length) {
        return of(posts);
      }

      return this.getPostsFromServer(post_user_id);
    }));
  }

  private getPostsFromServer (post_user_id: string): Observable<IPost[]> {
    return this.httpService.
      get<IPost[]>(`post/${post_user_id}`).
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
