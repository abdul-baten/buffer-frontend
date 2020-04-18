import { CanActivate, Router } from '@angular/router';
import { environment } from '@env/environment';
import { HttpService } from '@core/service/http/http.service';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthActivateGuard implements CanActivate {
  constructor(private httpService: HttpService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.httpService.post<any>(API_URL + 'auth/verify', {}).pipe(
      tap((response: any) => {
        if (!response.verified) this.router.navigate(['/enter']);
      }),
      map((response: any) => response.verified),
    );
  }
}
