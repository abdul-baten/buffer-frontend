import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const API_URL = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly httpClient: HttpClient) {}

  get<T>(apiURL: string, params?: HttpParams): Observable<T> {
    return this.httpClient
      .get<T>(API_URL + apiURL, {
        params: { ...params },
      })
      .pipe(shareReplay(1));
  }

  post<T>(apiURL: string, postInfo: T): Observable<T> {
    return this.httpClient.post<T>(API_URL + apiURL, postInfo).pipe(shareReplay(1));
  }

  patch<T>(apiURL: string, postInfo: T): Observable<T> {
    return this.httpClient.patch<T>(API_URL + apiURL, postInfo).pipe(shareReplay(1));
  }

  delete<T>(apiURL: string, deletedID: string): Observable<T> {
    return this.httpClient
      .delete<T>(API_URL + apiURL, { params: { deletedID } })
      .pipe(shareReplay(1));
  }
}
