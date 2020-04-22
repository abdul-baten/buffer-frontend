import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http/http.service';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;

@Injectable()
export class HeaderAccountService {
  constructor(private httpService: HttpService) {}

  logoutUser(): Observable<any> {
    return this.httpService.post<any>(API_URL + 'auth/logout', {});
  }
}
