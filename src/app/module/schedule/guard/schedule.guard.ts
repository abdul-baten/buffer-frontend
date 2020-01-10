// Core Modules
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// Third Party Modules
import { Observable, of } from 'rxjs';

@Injectable()
export class ScheduleGuard implements CanActivate {
  canActivate(): Observable<any> {
    return of(true);
  }
}
