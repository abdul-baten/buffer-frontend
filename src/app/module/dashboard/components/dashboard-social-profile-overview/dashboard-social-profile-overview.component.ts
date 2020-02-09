import { Component } from '@angular/core';
import { SocialProfileInterface } from '@core/model/post/post.model';

export interface PeriodicElement {
  engagement: string;
  followers: string;
  impressions: number;
  profiles: SocialProfileInterface;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    profiles: {
      socialName: 'Test Page for Iconosquare',
      socialAvatar:
        'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
      socialId: '',
      socialType: 'facebook',
      socialURL: '',
    },
    followers: 'Hydrogen',
    impressions: 1.0079,
    engagement: 'H',
  },
  {
    profiles: {
      socialName: 'Test Page for Pinterest',
      socialAvatar:
        'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
      socialId: '',
      socialType: 'pinterest',
      socialURL: '',
    },
    followers: 'Hydrogen',
    impressions: 1.0079,
    engagement: 'H',
  },
  {
    profiles: {
      socialName: 'Test Page for Iconosquare',
      socialAvatar:
        'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
      socialId: '',
      socialType: 'facebook',
      socialURL: '',
    },
    followers: 'Hydrogen',
    impressions: 1.0079,
    engagement: 'H',
  },
  {
    profiles: {
      socialName: 'Test Page for Pinterest',
      socialAvatar:
        'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
      socialId: '',
      socialType: 'pinterest',
      socialURL: '',
    },
    followers: 'Hydrogen',
    impressions: 1.0079,
    engagement: 'H',
  },
  {
    profiles: {
      socialName: 'Test Page for Iconosquare',
      socialAvatar:
        'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
      socialId: '',
      socialType: 'facebook',
      socialURL: '',
    },
    followers: 'Hydrogen',
    impressions: 1.0079,
    engagement: 'H',
  },
  {
    profiles: {
      socialName: 'Test Page for Pinterest',
      socialAvatar:
        'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
      socialId: '',
      socialType: 'pinterest',
      socialURL: '',
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
