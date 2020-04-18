import { environment } from '@env/environment';
import { HttpService } from '../http/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@core/model/user/user.model';
import jsSHA from 'jssha';
import { IMember } from '@core/model/member/member.interface';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpService) {}

  private getPasswordHash(password: string): string {
    const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
    shaObj.update(password);
    return shaObj.getHash('HEX');
  }

  loginUser(email: string, pass: string): Observable<User> {
    const password = this.getPasswordHash(pass);
    return this.httpService.post<User>(API_URL + 'auth/enter', { email, password });
  }

  signupUser(userInfo: User): Observable<User> {
    const { fullName, email, password: userPassword } = userInfo;
    const password = this.getPasswordHash(userPassword);
    return this.httpService.post<User>(API_URL + 'auth/join', { fullName, email, password });
  }

  onboardUser(memberInfo: IMember): Observable<IMember> {
    return this.httpService.post<IMember>(API_URL + 'member/onboard', memberInfo);
  }
}
