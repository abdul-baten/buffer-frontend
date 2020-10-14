import jsSHA from 'jssha';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IUser } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (private httpService: HttpService) {}

  private getPasswordHash (password: string): string {
    const sha_obj = new jsSHA('SHA-256', 'TEXT', { encoding: 'UTF8' });

    sha_obj.update(password);
    const hash = sha_obj.getHash('HEX');

    return hash;
  }

  loginUser (user_email: string, password: string): Observable<Partial<IUser>> {
    const user_password = this.getPasswordHash(password);

    return this.httpService.post<Partial<IUser>>('auth/enter', { user_email,
      user_password });
  }

  signupUser (user_info: Partial<IUser>): Observable<Partial<IUser>> {
    const { user_full_name, user_email, user_password } = user_info;
    const password = this.getPasswordHash(user_password as string);

    return this.httpService.post<Partial<IUser>>('auth/join', {
      user_email,
      user_full_name,
      user_password: password
    });
  }

  onboardUser (member_info: Partial<IUser>): Observable<Partial<IUser>> {
    return this.httpService.patch<Partial<IUser>>('auth/onboard', member_info);
  }
}
