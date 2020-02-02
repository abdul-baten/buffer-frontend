import { Component } from '@angular/core';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer--profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  isWeb$: Observable<boolean>;

  constructor(private layoutService: ResponsiveLayoutService) {
    this.isWeb$ = this.layoutService.isWeb();
  }
}
