import { catchError, map, mergeMap } from 'rxjs/operators';
import { ConnectionResolver } from './connection.resolver';
import { forkJoin, Observable } from 'rxjs';
import { I_CONNECTION, I_POST, I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { PostResolver } from './post.resolver';
import { Resolve, Router } from '@angular/router';
import { UserResolver } from './user.resolver';

@Injectable({
  providedIn: 'root',
})
export class UserConnectionResolver implements Resolve<Observable<{ connections: I_CONNECTION[]; posts: I_POST[] }>> {
  constructor(
    private readonly connectionResolver: ConnectionResolver,
    private readonly router: Router,
    private readonly postResolver: PostResolver,
    private readonly userInfoResolver: UserResolver,
  ) {}

  resolve(): Observable<{ connections: I_CONNECTION[]; posts: I_POST[] }> {
    return this.userInfoResolver.resolve().pipe(
      map((user: I_USER) => user),
      mergeMap(async () => {
        const connections = this.connectionResolver.resolve();
        const posts = this.postResolver.resolve();

        return await forkJoin({
          connections,
          posts,
        }).toPromise();
      }),
      catchError(error => {
        this.router.navigate(['/enter']);
        throw new Error(error);
      }),
    );
  }
}
