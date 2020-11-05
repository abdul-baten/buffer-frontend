import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { IPost } from '../model';
import { first, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComposeService extends EntityCollectionServiceBase<IPost> {
  constructor (public serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('compose', serviceElementsFactory);
  }

  public addPostToState (post_info: IPost): void {
    this.upsertOneInCache(post_info);
  }

  public updatePostMedia (media_user_id: string, media_info: string): Observable<string> {
    const post$ = this.getComposeInfo(media_user_id);

    return post$.pipe(switchMap(({ id, post_media }: IPost) => {
      const media = [...post_media ?? [], media_info];

      this.updateOneInCache({
        id,
        post_media: media
      });

      return id;
    }), first());
  }

  public getComposeInfo (post_user_id: string): Observable<IPost> {
    return this.entities$.pipe(map((posts: IPost[]) => {
      const post = posts.find((post: IPost) => post.post_user_id === post_user_id);

      return post as IPost;
    }), first());
  }
}
