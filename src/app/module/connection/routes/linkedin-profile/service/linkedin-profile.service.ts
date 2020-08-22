import { HttpParams } from '@angular/common/http';
import { HttpService } from '@core/service/http/http.service';
import { I_CONNECTION, I_LN_ACCESS_TOKEN_RESPONSE } from '@core/model/connection.model';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LinkedInProfileService {
  constructor(private readonly httpService: HttpService) {}

  getLinkedInProfile(connectionType: string, code: string): Observable<I_CONNECTION> {
    return this.httpService
      .get<I_LN_ACCESS_TOKEN_RESPONSE>('linkedin/access-token', ({ connectionType, code } as unknown) as HttpParams)
      .pipe(
        switchMap((response: I_LN_ACCESS_TOKEN_RESPONSE) => {
          return this.httpService.get<I_CONNECTION>('linkedin/me', ({ accessToken: response.access_token } as unknown) as HttpParams);
        }),
        map((connectionInfo: I_CONNECTION) => connectionInfo),
      );
  }

  addLinkedInProfile(connectionInfo: I_CONNECTION): Observable<I_CONNECTION> {
    return this.httpService.post<I_CONNECTION>('connection/add', connectionInfo);
  }
}
