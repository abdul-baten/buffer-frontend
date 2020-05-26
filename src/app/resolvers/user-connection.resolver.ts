import { ConnectionResolver } from './connection.resolver';
import { I_CONNECTION, I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserResolver } from './user-info.resolver';

@Injectable({
  providedIn: 'root',
})
export class UserConnectionResolver implements Resolve<Promise<{ userInfo: I_USER; connections: I_CONNECTION[] }>> {
  constructor(private userInfoResolver: UserResolver, private connectionsResolver: ConnectionResolver) {}

  async resolve(): Promise<{ userInfo: I_USER; connections: I_CONNECTION[] }> {
    const userInfo = await this.userInfoResolver.resolve().toPromise();
    const connections = await this.connectionsResolver.resolve().toPromise();

    return { userInfo, connections };
  }
}

// import { concatMap, map } from 'rxjs/operators';
// import { ConnectionResolver } from './connection.resolver';
// import { I_CONNECTION, I_USER } from '@core/model';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Resolve } from '@angular/router';
// import { UserResolver } from './user-info.resolver';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserConnectionResolver implements Resolve<Observable<{ userInfo: I_USER; connections: I_CONNECTION[] }>> {
//   constructor(private userInfoResolver: UserResolver, private connectionsResolver: ConnectionResolver) {}

//   resolve(): Observable<{ userInfo: I_USER; connections: I_CONNECTION[] }> {
//     return this.userInfoResolver.resolve().pipe(
//       concatMap((userInfo: I_USER) => {
//         return this.connectionsResolver.resolve().pipe(
//           map((connections: I_CONNECTION[]) => {
//             console.warn(connections);

//             return { userInfo, connections };
//           }),
//         );
//       }),
//     );
//   }
// }
