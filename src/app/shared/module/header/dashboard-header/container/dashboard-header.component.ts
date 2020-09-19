import { Component } from '@angular/core';
import { DashboardHeaderFacade } from '../facade/dashboard-header.facade';

@Component({
  selector: 'buffer--dashboard-header',
  styleUrls: ['./dashboard-header.component.scss'],
  templateUrl: './dashboard-header.component.html',
})
export class DashboardHeaderComponent {
  constructor(private facade: DashboardHeaderFacade) {}

  handleAddPostBtnClick(): void {
    this.facade.handleAddPostBtnClick(new Date());
  }
}
