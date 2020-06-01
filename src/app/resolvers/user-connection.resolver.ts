import { ConnectionResolver } from './connection.resolver';
import { I_CONNECTION, I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { UserResolver } from './user-info.resolver';

@Injectable({
  providedIn: 'root',
})
export class UserConnectionResolver implements Resolve<Promise<{ userInfo: I_USER; connections: I_CONNECTION[] }>> {
  constructor(
    private readonly userInfoResolver: UserResolver,
    private readonly connectionsResolver: ConnectionResolver,
    private readonly router: Router,
  ) {}

  async resolve(): Promise<{ userInfo: I_USER; connections: I_CONNECTION[] }> {
    try {
      const userInfo = await this.userInfoResolver.resolve().toPromise();
      const connections = await this.connectionsResolver.resolve().toPromise();

      return { userInfo, connections };
    } catch (error) {
      this.router.navigate(['/enter']);
      throw new Error(error);
    }
  }
}
