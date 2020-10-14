import { first, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';
import { IPost, IUser } from '../core/model';
import { PostService, UserService } from '../core/service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost[]> {
  constructor (private readonly postService: PostService, private readonly userService: UserService) {}

  public resolve (): Observable<IPost[]> {
    const user_id_from_state$ = this.userService.getUserFromState();
    const connections_from_state$ = this.postService.entities$;
    const user_info_from_server$ = user_id_from_state$.pipe(switchMap((user: IUser) => this.postService.getPosts(user.id).pipe(map((posts: IPost[]) => posts))));

    return connections_from_state$.pipe(
      switchMap((posts: IPost[]) => {
        if (posts.length) {
          return of(posts);
        }

        return user_info_from_server$;
      }),
      first()
    );
  }
}
