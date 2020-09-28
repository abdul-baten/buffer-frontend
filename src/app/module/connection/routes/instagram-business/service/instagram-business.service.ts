import { HttpParams } from '@angular/common/http';
import { HttpService } from '@core/service/http/http.service';
import { I_FB_PAGE_RESPONSE, I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InstagramBusinessService {
  constructor(private readonly httpService: HttpService) {}

  fetchInstagramBusiness(code: string, connectionType: string): Observable<I_FB_PAGE_RESPONSE> {
    return this.httpService.get<I_FB_PAGE_RESPONSE>(`instagram/${connectionType}`, ({
      code,
      connectionType,
    } as unknown) as HttpParams);
  }

  addInstagramBusiness(pageInfo: I_CONNECTION): Observable<I_CONNECTION> {
    return this.httpService.post<I_CONNECTION>('connection/add', pageInfo);
  }
}
