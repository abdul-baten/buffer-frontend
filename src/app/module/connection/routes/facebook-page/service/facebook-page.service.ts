import { HttpParams } from '@angular/common/http';
import { HttpService } from '@core/service/http/http.service';
import { I_FB_PAGE_RESPONSE, I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

const API_URL = environment.apiURL;

@Injectable()
export class FacebookPageService {
  constructor(private httpService: HttpService) {}

  fetchFacebookPages(code: string): Observable<I_FB_PAGE_RESPONSE> {
    return this.httpService.get<I_FB_PAGE_RESPONSE>(API_URL + 'connection/getFBPages', ({
      code,
    } as unknown) as HttpParams);
  }

  addFacebookPage(pageInfo: I_CONNECTION): Observable<I_CONNECTION> {
    return this.httpService.post<I_CONNECTION>(API_URL + 'connection/addFBPage', pageInfo);
  }
}
