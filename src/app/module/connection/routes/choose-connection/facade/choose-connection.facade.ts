import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import type { GlobalService } from 'src/app/core/service';
import type { Router } from '@angular/router';

const { api_base_uri } = environment;

@Injectable()
export class ChooseConnectionFacade {
  constructor (private readonly globalService: GlobalService, private readonly router: Router) {}

  public navigateToRoute (route: string): void {
    this.router.navigate([route]);
  }

  public authConnection (auth_type: string, connection_type: string): void {
    this.globalService.getLocation().replace(`${api_base_uri}${auth_type}/authorize?connection_type=${connection_type}`);
  }
}
