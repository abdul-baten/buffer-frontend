import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ConnectionResolver } from './connection.resolver';
import { ErrorService } from '../core/service';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { I_CONNECTION, I_POST } from '../core/model';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PostResolver } from './post.resolver';
import { UserResolver } from './user.resolver';

@Injectable({
  providedIn: 'root',
})
export class UserConnectionResolver implements Resolve<Observable<{ connections: I_CONNECTION[]; posts: I_POST[] } | null>> {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly connectionResolver: ConnectionResolver,
    private readonly errorService: ErrorService,
    private readonly postResolver: PostResolver,
    private readonly userInfoResolver: UserResolver,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ connections: I_CONNECTION[]; posts: I_POST[] } | null> {
    const connections$ = this.connectionResolver.resolve(route, state),
      posts$ = this.postResolver.resolve(route, state),
      userData$ = this.userInfoResolver
        .resolve(route, state)
        .pipe(switchMap(() => forkJoin([connections$, posts$]).pipe(map(([connections, posts]) => ({ connections, posts })))));

    return isPlatformBrowser(this.platformId)
      ? userData$.pipe(
          catchError((error) => {
            this.errorService.handleServerError(error);
            return throwError(error);
          }),
        )
      : of(null);
  }
}
