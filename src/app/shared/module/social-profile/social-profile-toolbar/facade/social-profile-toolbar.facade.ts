import { Injectable } from '@angular/core';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { Observable } from 'rxjs';

@Injectable()
export class SocialProfileToolbarFacade {
  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }
}
