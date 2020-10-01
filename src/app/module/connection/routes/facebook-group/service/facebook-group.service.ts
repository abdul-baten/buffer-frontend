import { HttpParams } from '@angular/common/http';
import { HttpService } from 'src/app/core/service';
import { I_CONNECTION, I_FB_PAGE_RESPONSE } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FacebookGroupService {
  constructor(private readonly httpService: HttpService) {}

  fetchFacebookGroups(code: string, connectionType: string): Observable<I_FB_PAGE_RESPONSE> {
    return this.httpService.get<I_FB_PAGE_RESPONSE>(`facebook/${connectionType}s`, ({
      code,
      connectionType,
    } as unknown) as HttpParams);
  }

  addFacebookGroup(pageInfo: I_CONNECTION): Observable<I_CONNECTION> {
    return this.httpService.post<I_CONNECTION>('connection/add', pageInfo);
  }
}
