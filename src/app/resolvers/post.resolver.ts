import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';
import { I_POST, I_USER } from '../core/model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostService, UserService } from '../core/service';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<I_POST[]> {
  constructor(private readonly postService: PostService, private readonly userService: UserService) {}

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<I_POST[]> {
    const userIDFromState$ = this.userService.getUserFromState(),
      connectionsFromState$ = this.postService.entities$,
      userInfofromRequest$ = userIDFromState$.pipe(
        switchMap((user: I_USER) => this.postService.getPosts(user.id).pipe(map((posts: I_POST[]) => posts))),
      );

    return connectionsFromState$.pipe(
      switchMap((posts: I_POST[]) => (!!posts.length ? of(posts) : userInfofromRequest$)),
      first(),
    );
  }
}
