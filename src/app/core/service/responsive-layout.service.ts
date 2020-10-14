import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveLayoutService {
  constructor (private readonly breakpointObserver: BreakpointObserver) {}

  public isWeb (): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Web).pipe(map((result: BreakpointState) => result.matches));
  }

  public isTablet (): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Tablet).pipe(map((result: BreakpointState) => result.matches));
  }

  public isHandset (): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Handset).pipe(map((result: BreakpointState) => result.matches));
  }
}
