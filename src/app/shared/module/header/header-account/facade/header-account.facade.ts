import { HeaderAccountService } from '../service/header-account.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HeaderAccountFacade {
  constructor(private dashboardHeaderService: HeaderAccountService, private router: Router) {}

  navigateToRoute(routeToNavigate: string): void {
    this.router.navigate([routeToNavigate]);
  }

  logoutUser(): void {
    this.dashboardHeaderService.logoutUser().subscribe(() => location.reload());
  }
}
