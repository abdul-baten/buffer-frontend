import { ConnectionResolver } from './connection.resolver';
import { I_CONNECTION, I_USER, I_POST } from '@core/model';
import { Injectable } from '@angular/core';
import { PostResolver } from './post.resolver';
import { Resolve, Router } from '@angular/router';
import { UserResolver } from './user.resolver';

@Injectable({
  providedIn: 'root',
})
export class UserConnectionResolver implements Resolve<Promise<{ userInfo: I_USER; connections: I_CONNECTION[]; posts: I_POST[] }>> {
  constructor(
    private readonly connectionResolver: ConnectionResolver,
    private readonly router: Router,
    private readonly postResolver: PostResolver,
    private readonly userInfoResolver: UserResolver,
  ) {}

  async resolve(): Promise<{ userInfo: I_USER; connections: I_CONNECTION[]; posts: I_POST[] }> {
    try {
      const userInfo = await this.userInfoResolver.resolve().toPromise();
      const connections = await this.connectionResolver.resolve().toPromise();
      const posts = await this.postResolver.resolve().toPromise();

      return { userInfo, connections, posts };
    } catch (error) {
      this.router.navigate(['/enter']);
      throw new Error(error);
    }
  }
}
