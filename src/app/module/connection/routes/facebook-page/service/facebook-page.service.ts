import { HttpParams } from '@angular/common/http';
import { HttpService } from '@core/service/http/http.service';
import { I_FB_PAGE_RESPONSE, I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FacebookPageService {
  constructor(private readonly httpService: HttpService) {}

  fetchFacebookPages(code: string): Observable<I_FB_PAGE_RESPONSE> {
    return this.httpService.get<I_FB_PAGE_RESPONSE>('connection/getFBPages', ({
      code,
    } as unknown) as HttpParams);
  }

  addFacebookPage(pageInfo: I_CONNECTION): Observable<I_CONNECTION> {
    return this.httpService.post<I_CONNECTION>('connection/addFBPage', pageInfo);
  }
}
