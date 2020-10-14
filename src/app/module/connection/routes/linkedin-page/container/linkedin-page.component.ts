import { Component, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IConnection } from 'src/app/core/model';
import { LinkedInPageFacade } from '../facade/linkedin-page.facade';

@Component({
  selector: 'buffer-linkedin-page',
  styleUrls: ['./linkedin-page.component.css'],
  templateUrl: './linkedin-page.component.html'
})
export class LinkedInPageComponent implements OnDestroy {
  public connection$: Observable<IConnection[]>;
  public is_platform_handset$: Observable<boolean>;
  public is_platform_tablet$: Observable<boolean>;
  public is_platform_web$: Observable<boolean>;
  private subscription$ = new Subscription();

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: LinkedInPageFacade) {
    this.connection$ = this.getConnections();
    this.is_platform_handset$ = this.facade.isHandset();
    this.is_platform_tablet$ = this.facade.isTablet();
    this.is_platform_web$ = this.facade.isWeb();
  }

  private getConnections (): Observable<IConnection[]> {
    return this.activatedRoute.queryParamMap.pipe(switchMap((query_param_map: ParamMap) => {
      const code = query_param_map.get('code') as string,
        state = query_param_map.get('state') as string;

      if (!code && !state) {
        this.navigateToRoute('/connection/choose');
      }

      return this.facade.getLinkedInPage('linkedin-page', code);
    }));
  }

  public navigateToRoute (route: string): void {
    this.facade.navigateToRoute(route);
  }

  public addConnection (connection_info: IConnection): void {
    this.subscription$.add(this.facade.addLinkedInPage(connection_info).subscribe(() => this.navigateToRoute('connection/profiles')));
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public trackBy (_index: number, connection: IConnection): number {
    return Number(connection.connection_id);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
