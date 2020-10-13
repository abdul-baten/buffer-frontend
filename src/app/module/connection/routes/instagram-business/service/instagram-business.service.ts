import { Injectable } from '@angular/core';

import type { HttpService } from 'src/app/core/service';
import type { IConnection } from 'src/app/core/model';
import type { Observable } from 'rxjs';

@Injectable()
export class InstagramBusinessService {
  constructor (private readonly httpService: HttpService) {}

  public getBusinessAccounts (code: string, connection_type: string): Observable<IConnection[]> {
    return this.httpService.get<IConnection[]>(`instagram/${connection_type}`, {
      code,
      connection_type
    });
  }

  public addBusinessAccount (connection_info: IConnection): Observable<IConnection> {
    return this.httpService.post<IConnection>('connection/add', connection_info);
  }
}
