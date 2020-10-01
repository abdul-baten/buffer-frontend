import { catchError, first, map, switchMap } from 'rxjs/operators';
import { ErrorService, PostService, UserService } from '../core/service';
import { I_POST, I_USER } from '../core/model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<I_POST[]> {
  constructor(private readonly errorService: ErrorService, private readonly postService: PostService, private readonly userService: UserService) {}

  resolve(): Observable<I_POST[]> {
    const userIDFromState$ = this.userService.getUserFromState();
    const connectionsFromState$ = this.postService.entities$;
    const userInfofromRequest$ = userIDFromState$.pipe(
      switchMap((user: I_USER) => this.postService.getPosts(user.id).pipe(map((posts: I_POST[]) => posts))),
    );

    return connectionsFromState$.pipe(
      switchMap((posts: I_POST[]) => {
        return !!posts.length ? of(posts) : userInfofromRequest$;
      }),
      map((posts: I_POST[]) => posts),
      first(),
      catchError((error: any) => {
        this.errorService.handleServerError(error);
        throw of(error);
      }),
    );
  }
}
