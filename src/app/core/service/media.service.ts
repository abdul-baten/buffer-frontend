import { HttpService } from './http.service';
import { I_MEDIA } from '../model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private readonly httpService: HttpService) {}

  deleteMedia(mediaID: string): Observable<I_MEDIA> {
    return this.httpService.delete<I_MEDIA>('media/delete', mediaID);
  }
}
