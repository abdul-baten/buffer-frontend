import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsiveLayoutService } from 'src/app/core/service';

@Injectable()
export class ProfileFacade {
  constructor(private readonly responsiveLayoutService: ResponsiveLayoutService) {}

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }
}
