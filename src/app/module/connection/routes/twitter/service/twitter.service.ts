import { HttpParams } from '@angular/common/http';
import { HttpService } from '@core/service/http/http.service';
import { I_FB_PAGE_RESPONSE, I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TwitterService {
  constructor(private readonly httpService: HttpService) {}

  fetchTwitterProfiles(oauthToken: string, oauthVerifier: string): Observable<I_FB_PAGE_RESPONSE> {
    return this.httpService.get<any>('twitter/accessToken', ({
      oauth_token: oauthToken,
      oauth_verifier: oauthVerifier,
    } as unknown) as HttpParams);
  }

  addTwitterProfile(profileInfo: I_CONNECTION): Observable<I_CONNECTION> {
    return this.httpService.post<I_CONNECTION>('connection/add', profileInfo);
  }
}
