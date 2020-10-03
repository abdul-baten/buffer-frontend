import { I_CONNECTION } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserConnectionService } from 'src/app/core/service';

@Injectable()
export class AnalyzeFacade {
  constructor(private readonly userConnectionService: UserConnectionService) {}

  getUserData(): Observable<I_CONNECTION[]> {
    return this.userConnectionService.resolve();
  }
}
