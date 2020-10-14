import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/service';

const { api_base_uri } = environment;

@Injectable()
export class HeaderAccountService {
  constructor (private readonly globalService: GlobalService) {}
  logoutUser (): void {
    this.globalService.getLocation().replace(`${api_base_uri}auth/logout`);
  }
}
