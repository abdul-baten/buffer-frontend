import { DashboardHeaderService } from '../service/dashboard-header.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class DashboardHeaderFacade {
  constructor(private dashboardHeaderService: DashboardHeaderService, private router: Router) {}

  navigateToRoute(routeToNavigate: string): void {
    this.router.navigate([routeToNavigate]);
  }

  logoutUser(): void {
    this.dashboardHeaderService.logoutUser().subscribe(() => location.reload());
  }
}
