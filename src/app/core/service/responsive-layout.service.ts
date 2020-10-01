import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveLayoutService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isWeb(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Web).pipe(map(result => result.matches));
  }

  isTablet(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Tablet).pipe(map(result => result.matches));
  }

  isHandset(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));
  }
}
