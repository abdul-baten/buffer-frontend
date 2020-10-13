import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import type { HttpService } from 'src/app/core/service';
import type { IConnection } from 'src/app/core/model';
import type { Observable } from 'rxjs';

@Injectable()
export class LinkedInProfileService {
  constructor (private readonly httpService: HttpService) {}

  getLinkedInProfile (connection_type: string, code: string): Observable<IConnection> {
    return this.httpService.
      get<IConnection>('linkedin/access-token', {
        code,
        connection_type
      }).
      pipe(
        switchMap((access_token: string) => this.httpService.get<IConnection>('linkedin/me', { access_token })),
        map((connection_info: IConnection) => connection_info)
      );
  }

  addLinkedInProfile (connection_info: IConnection): Observable<IConnection> {
    return this.httpService.post<IConnection>('connection/add', connection_info);
  }
}
