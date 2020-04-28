import jsSHA from 'jssha';
import { environment } from '@env/environment';
import { HttpService } from '../http/http.service';
import { Injectable } from '@angular/core';
import { IUser } from '@core/model/user/user.model';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpService) {}

  private getPasswordHash(password: string): string {
    const shaObj = new jsSHA('SHA-256', 'TEXT', { encoding: 'UTF8' });
    shaObj.update(password);
    const hash = shaObj.getHash('HEX');

    return hash;
  }

  loginUser(email: string, pass: string): Observable<Partial<IUser>> {
    const password = this.getPasswordHash(pass);
    return this.httpService.post<Partial<IUser>>(API_URL + 'auth/enter', { email, password });
  }

  signupUser(userInfo: Partial<IUser>): Observable<Partial<IUser>> {
    const { fullName, email, password: userPassword } = userInfo;
    const password = this.getPasswordHash(userPassword);
    return this.httpService.post<Partial<IUser>>(API_URL + 'auth/join', { fullName, email, password });
  }

  onboardUser(memberInfo: Partial<IUser>): Observable<Partial<IUser>> {
    return this.httpService.patch<Partial<IUser>>(API_URL + 'auth/onboard', memberInfo);
  }
}
