import jsSHA from 'jssha';
import { HttpService } from '../http/http.service';
import { I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  loginUser(email: string, pass: string): Observable<Partial<I_USER>> {
    const password = this.getPasswordHash(pass);
    return this.httpService.post<Partial<I_USER>>('auth/enter', { email, password });
  }

  signupUser(userInfo: Partial<I_USER>): Observable<Partial<I_USER>> {
    const { fullName, email, password: userPassword } = userInfo;
    const password = this.getPasswordHash(userPassword);
    return this.httpService.post<Partial<I_USER>>('auth/join', { fullName, email, password });
  }

  onboardUser(memberInfo: Partial<I_USER>): Observable<Partial<I_USER>> {
    return this.httpService.patch<Partial<I_USER>>('auth/onboard', memberInfo);
  }
}
