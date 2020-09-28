import { catchError, first, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ErrorService } from '@core/service/error/error.service';
import { forkJoin, Observable, of } from 'rxjs';
import { I_CONNECTION, I_POST, I_USER } from '@core/model';
import { Router } from '@angular/router';
import { UserService } from '@core/service/user/user.service';
import { ConnectionService } from '@core/service/connection/connection.service';
import { PostService } from '@core/service/post/post.service';

@Injectable()
export class AppFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly errorService: ErrorService,
    private readonly postService: PostService,
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  getData() {
    return this.getUser().pipe(
      map((user: I_USER) => user),
      mergeMap(async () => {
        const connections = this.getConnections();
        const posts = this.getPosts();

        return await forkJoin({
          connections,
          posts,
        }).toPromise();
      }),
      catchError((error) => {
        this.router.navigate(['/enter']);
        throw new Error(error);
      }),
    );
  }

  getConnections(): Observable<I_CONNECTION[]> {
    const userIDFromState$ = this.userService.getUserFromState();
    const connectionsFromState$ = this.connectionService.entities$;
    const userInfofromRequest$ = userIDFromState$.pipe(
      switchMap((user: I_USER) => this.connectionService.getConnections(user.id).pipe(map((connections: I_CONNECTION[]) => connections))),
    );

    return connectionsFromState$.pipe(
      switchMap((connections: I_CONNECTION[]) => {
        return !!connections.length ? of(connections) : userInfofromRequest$;
      }),
      map((connections: I_CONNECTION[]) => connections),
      first(),
      catchError((error: any) => {
        this.errorService.handleServerError(error);
        throw of(error);
      }),
    );
  }

  getUser(): Observable<I_USER> {
    const userFromState$ = this.userService.entities$;
    const userFromResponse$ = this.userService.getUser();

    return userFromState$.pipe(
      switchMap((users: I_USER[]) => (!!users.length ? of(users[0]) : userFromResponse$)),
      take(1),
      catchError((error: any) => {
        this.errorService.handleServerError(error);
        throw of(null);
      }),
    );
  }

  getPosts(): Observable<I_POST[]> {
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
