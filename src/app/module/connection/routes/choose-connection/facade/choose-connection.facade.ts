import { environment } from 'src/environments/environment';
import { GlobalService } from 'src/app/core/service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const API_URL = environment.apiURL;
@Injectable()
export class ChooseConnectionFacade {
  constructor(private readonly globalService: GlobalService, private readonly router: Router) {}

  navigateToRoute(routeToNavigate: string): void {
    this.router.navigate([routeToNavigate]);
  }

  authConnection(authType: string, connectionType: string): void {
    this.globalService.getLocation().replace(API_URL + `${authType}/authorize?connectionType=${connectionType}`);
  }
}
