import { HttpParams } from '@angular/common/http';
import { HttpService } from 'src/app/core/service';
import { I_CONNECTION, I_LN_ACCESS_TOKEN_RESPONSE } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LinkedInPageService {
  constructor(private readonly httpService: HttpService) {}

  getLinkedInPage(connectionType: string, code: string): Observable<I_CONNECTION[]> {
    return this.httpService
      .get<I_LN_ACCESS_TOKEN_RESPONSE>('linkedin/access-token', ({ connectionType, code } as unknown) as HttpParams)
      .pipe(
        switchMap((response: I_LN_ACCESS_TOKEN_RESPONSE) => {
          return this.httpService.get<I_CONNECTION[]>('linkedin/organisation', ({ accessToken: response.access_token } as unknown) as HttpParams);
        }),
        map((connectionInfo: I_CONNECTION[]) => connectionInfo),
      );
  }

  addLinkedInPage(connectionInfo: I_CONNECTION): Observable<I_CONNECTION> {
    return this.httpService.post<I_CONNECTION>('connection/add', connectionInfo);
  }
}
