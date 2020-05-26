import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get<T>(apiURL: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(apiURL, {
      responseType: 'json',
      withCredentials: true,
      params: { ...params },
    });
  }

  post<T>(apiURL: string, postInfo: T): Observable<T> {
    return this.httpClient.post<T>(apiURL, postInfo, {
      responseType: 'json',
      withCredentials: true,
    });
  }

  patch<T>(apiURL: string, postInfo: T): Observable<T> {
    return this.httpClient.patch<T>(apiURL, postInfo, {
      responseType: 'json',
      withCredentials: true,
    });
  }
}
