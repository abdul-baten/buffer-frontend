import { environment } from 'src/environments/environment';
import { GlobalService } from 'src/app/core/service';
import { Injectable } from '@angular/core';

const API_URL = environment.apiURL;

@Injectable()
export class HeaderAccountService {
  constructor(private readonly globalService: GlobalService) {}
  logoutUser(): void {
    this.globalService.getLocation().replace(API_URL + 'auth/logout');
  }
}
