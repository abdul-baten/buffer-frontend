import { Component } from '@angular/core';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from '@core/enum';
import { I_CONNECTION } from '@core/model';

export interface PeriodicElement {
  engagement: string;
  followers: string;
  impressions: number;
  profiles: I_CONNECTION;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    profiles: {
      id: '',
      connectionID: '',
      connectionName: 'Test Page for Iconosquare',
      connectionPicture:
        'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
      connectionStatus: E_CONNECTION_STATUS.ENABLED,
      connectionToken: '',
      connectionType: E_CONNECTION_TYPE.FACEBOOK_PAGE,
      connectionUserID: '',
    },
    followers: 'Hydrogen',
    impressions: 1.0079,
    engagement: 'H',
  },
];

@Component({
  selector: 'buffer--dashboard-social-profile-overview',
  templateUrl: './dashboard-social-profile-overview.component.html',
  styleUrls: ['./dashboard-social-profile-overview.component.scss'],
})
export class DashboardSocialProfileOverviewComponent {
  displayedColumns: string[] = ['profiles', 'followers', 'impressions', 'engagement'];
  dataSource = ELEMENT_DATA;
}
