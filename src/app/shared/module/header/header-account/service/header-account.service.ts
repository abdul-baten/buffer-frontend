import { environment } from '@env/environment';
import { Injectable } from '@angular/core';

const API_URL = environment.apiURL;

@Injectable()
export class HeaderAccountService {
  logoutUser(): void {
    window.location.replace(API_URL + 'auth/logout');
  }
}
