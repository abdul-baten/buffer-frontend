import { catchError, map, switchMap } from 'rxjs/operators';
import { ConnectionResolver } from './connection.resolver';
import { ErrorService } from '../core/service';
import { forkJoin, Observable, throwError } from 'rxjs';
import { IConnection, IPost } from '../core/model';
import { Injectable } from '@angular/core';
import { PostResolver } from './post.resolver';
import { Resolve } from '@angular/router';
import { UserResolver } from './user.resolver';

@Injectable({
  providedIn: 'root'
})
export class UserConnectionResolver implements Resolve<Observable<{ connections: IConnection[]; posts: IPost[] } | null>> {
  constructor (
    private readonly connectionResolver: ConnectionResolver,
    private readonly errorService: ErrorService,
    private readonly postResolver: PostResolver,
    private readonly userInfoResolver: UserResolver
  ) {}

  resolve (): Observable<{ connections: IConnection[]; posts: IPost[] } | null> {
    const connections$ = this.connectionResolver.resolve();
    const posts$ = this.postResolver.resolve();
    const user_info$ = this.userInfoResolver.
      resolve().
      pipe(switchMap(() => forkJoin([connections$, posts$]).pipe(map(([connections, posts]) => ({ connections,
        posts })))));

    return user_info$.pipe(catchError((error) => {
      this.errorService.handleServerError(error);

      return throwError(error);
    }));
  }
}
