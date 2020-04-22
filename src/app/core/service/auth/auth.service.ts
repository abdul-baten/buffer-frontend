import * as CryptoJS from 'crypto-js';
import { environment } from '@env/environment';
import { HttpService } from '../http/http.service';
import { IMember } from '@core/model/member/member.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@core/model/user/user.model';

const apacheEncrypt = require('apache-crypt');

const API_URL = environment.apiURL;
const { secretKey, numRounds } = environment.secret;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpService) {}

  private getPasswordHash(password: string): string {
    const key = CryptoJS.enc.Base64.parse(secretKey);
    const iv = CryptoJS.enc.Base64.parse(secretKey);
    const encrypted = CryptoJS.AES.encrypt(password, key, {
      keySize: 32,
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return apacheEncrypt(encrypted, numRounds);
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
