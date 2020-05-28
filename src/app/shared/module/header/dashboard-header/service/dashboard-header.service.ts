import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardHeaderService {
  constructor(private httpService: HttpService) {}

  logoutUser(): Observable<any> {
    return this.httpService.post<any>('auth/logout', {});
  }
}
