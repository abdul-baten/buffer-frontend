import { Injectable } from '@angular/core';

import type { HttpService } from 'src/app/core/service';
import type { IConnection } from 'src/app/core/model';
import type { Observable } from 'rxjs';

@Injectable()
export class FacebookGroupService {
  constructor (private readonly httpService: HttpService) {}

  public getGroups (code: string, connection_type: string): Observable<IConnection[]> {
    return this.httpService.get<IConnection[]>(`facebook/${connection_type}s`, {
      code,
      connection_type
    });
  }

  public addGroup (coonnection: IConnection): Observable<IConnection> {
    return this.httpService.post<IConnection>('connection/add', coonnection);
  }
}
