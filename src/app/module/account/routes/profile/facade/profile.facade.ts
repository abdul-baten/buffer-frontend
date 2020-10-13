import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import type { ResponsiveLayoutService } from 'src/app/core/service';

@Injectable()
export class ProfileFacade {
  constructor (private readonly responsiveLayoutService: ResponsiveLayoutService) {}

  isWeb (): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }
}
