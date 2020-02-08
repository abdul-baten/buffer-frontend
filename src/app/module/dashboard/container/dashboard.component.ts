import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DashboardFacade } from '../facade/dashboard.facade';
import { DocumentInterface } from '@core/model/document/document.model';
import { SubSink } from 'subsink';
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
  selector: 'buffer--dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy, OnInit {
  private subscriptions$ = new SubSink();

  displayedColumns: string[] = ['profiles', 'followers', 'impressions', 'engagement'];
  dataSource = ELEMENT_DATA;

  constructor(private activatedRoute: ActivatedRoute, private dashboardFacade: DashboardFacade) {}

  ngOnInit() {
    this.setTitle();
  }

  private setTitle(): void {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((documentData: DocumentInterface) =>
        this.dashboardFacade.setTitle(documentData.title),
      ),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
