import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '@core/service/http/http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private httpService: HttpService, private router: Router) {}

  canActivate() {
    this.httpService
      .post<Record<any, any>>('auth/verify', {})
      .pipe(map((response: any) => response.verified))
      .subscribe((response: boolean) => {
        if (!response) {
          this.router.navigate(['/enter']);
        }
      });
  }
}
