import { Component, OnInit } from '@angular/core';
import { FacebookFacade } from '../../facade/analyze-facebook.facade';

@Component({
  selector: 'buffer--facebook-route-overview',
  styleUrls: ['./facebook-route-overview.component.scss'],
  templateUrl: './facebook-route-overview.component.html',
})
export class FacebookRouteOverviewComponent implements OnInit {
  constructor(private facade: FacebookFacade) {}

  ngOnInit(): void {
    this.facade.fetchAnalytics();
  }
}
