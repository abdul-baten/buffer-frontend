import { Component } from '@angular/core';
import { DashboardHeaderFacade } from '../facade/dashboard-header.facade';

@Component({
  selector: 'buffer-dashboard-header',
  styleUrls: ['./dashboard-header.component.css'],
  templateUrl: './dashboard-header.component.html'
})
export class DashboardHeaderComponent {
  constructor (private readonly facade: DashboardHeaderFacade) {}

  public newPost (): void {
    this.facade.newPost(new Date());
  }
}
