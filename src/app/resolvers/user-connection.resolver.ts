import { catchError, map, switchMap } from 'rxjs/operators';
import {
  forkJoin,
  Observable,
  of,
  throwError
} from 'rxjs';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Resolve } from '@angular/router';
import { ConnectionResolver } from './connection.resolver';
import { ErrorService } from '../core/service';
import { IConnection, IPost } from '../core/model';
import { PostResolver } from './post.resolver';
import { UserResolver } from './user.resolver';

@Injectable({
  providedIn: 'root'
})
export class UserConnectionResolver implements Resolve<Observable<{ connections: IConnection[]; posts: IPost[] } | null>> {
  constructor (
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) private readonly platformId: Object,
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

    return isPlatformBrowser(this.platformId) ?
      user_info$.pipe(catchError((error) => {
        this.errorService.handleServerError(error);

        return throwError(error);
      })) :
      of(null);
  }
}
