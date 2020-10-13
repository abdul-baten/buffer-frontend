import { Injectable } from '@angular/core';
import type { HttpService } from './http.service';
import type { IMedia } from '../model';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor (private readonly httpService: HttpService) {}

  public deleteMedia (media_id: string): Observable<IMedia> {
    return this.httpService.delete<IMedia>('media/delete', media_id);
  }
}
