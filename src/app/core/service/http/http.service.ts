import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get<T>(apiURL: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(API_URL + apiURL, {
      responseType: 'json',
      withCredentials: true,
      params: { ...params },
    });
  }

  post<T>(apiURL: string, postInfo: T): Observable<T> {
    return this.httpClient.post<T>(API_URL + apiURL, postInfo, {
      responseType: 'json',
      withCredentials: true,
    });
  }

  patch<T>(apiURL: string, postInfo: T): Observable<T> {
    return this.httpClient.patch<T>(API_URL + apiURL, postInfo, {
      responseType: 'json',
      withCredentials: true,
    });
  }

  delete<T>(apiURL: string, deletedID: string): Observable<T> {
    return this.httpClient.delete<T>(API_URL + apiURL, {
      params: { deletedID },
      responseType: 'json',
      withCredentials: true,
    });
  }
}
