import { environment } from '@env/environment';
import { HttpParams } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private httpService: HttpService) {}

  getConnections(userID: string): Observable<I_CONNECTION[]> {
    return this.httpService.get<I_CONNECTION[]>(API_URL + 'connection/getConnections', ({
      userID,
    } as unknown) as HttpParams);
  }
}
