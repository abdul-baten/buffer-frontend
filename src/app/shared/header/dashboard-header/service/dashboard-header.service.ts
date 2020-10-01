import { HttpService } from 'src/app/core/service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardHeaderService {
  constructor(private readonly httpService: HttpService) {}

  logoutUser(): Observable<any> {
    return this.httpService.post<any>('auth/logout', {});
  }
}
