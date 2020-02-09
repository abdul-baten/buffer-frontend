import { Component } from '@angular/core';
import { DashboardFacade } from '@app/dashboard/facade/dashboard.facade';

@Component({
  selector: 'buffer--dashboard-sub-toolbar',
  templateUrl: './dashboard-sub-toolbar.component.html',
  styleUrls: ['./dashboard-sub-toolbar.component.scss'],
})
export class DashboardSubToolbarComponent {
  constructor(private dashboardFacade: DashboardFacade) {}

  handleAddPostBtnClick(): void {
    this.dashboardFacade.handlePostCreateDialogOpen(new Date());
  }
}
