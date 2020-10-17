import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const { api_base_uri } = environment;

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor (private readonly httpClient: HttpClient) {}

  public get<T> (uri: string, params?: Record<string, string>): Observable<T> {
    return this.httpClient.
      get<T>(api_base_uri + uri, {
        params: { ...params } as HttpParams
      }).
      pipe(shareReplay(1));
  }

  public post<T> (uri: string, post_info: unknown): Observable<T> {
    return this.httpClient.post<T>(api_base_uri + uri, post_info).pipe(shareReplay(1));
  }

  public patch<T> (uri: string, post_info: T): Observable<T> {
    return this.httpClient.patch<T>(api_base_uri + uri, post_info).pipe(shareReplay(1));
  }

  public delete<T> (uri: string): Observable<T> {
    return this.httpClient.
      delete<T>(api_base_uri + uri).
      pipe(shareReplay(1));
  }
}
