import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/core/service';
import { IConnection } from 'src/app/core/model';
import { Observable } from 'rxjs';

@Injectable()
export class TwitterService {
  constructor (private readonly httpService: HttpService) {}

  getTwitterProfile (oauth_token: string, oauth_verifier: string): Observable<IConnection> {
    return this.httpService.get<IConnection>('twitter/profiles', {
      oauth_token,
      oauth_verifier
    });
  }

  addTwitterProfile (profile_info: IConnection): Observable<IConnection> {
    return this.httpService.post<IConnection>('connection/add', profile_info);
  }
}
