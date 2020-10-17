import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IMedia } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor (private readonly httpService: HttpService) {}

  public deleteMedia (media_id: string): Observable<IMedia> {
    return this.httpService.delete<IMedia>(`media/${media_id}`);
  }
}
