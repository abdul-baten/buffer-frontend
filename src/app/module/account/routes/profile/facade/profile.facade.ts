import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';

@Injectable()
export class ProfileFacade {
  constructor(private readonly responsiveLayoutService: ResponsiveLayoutService) {}

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }
}
