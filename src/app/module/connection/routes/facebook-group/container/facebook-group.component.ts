import { Component, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import type { ActivatedRoute } from '@angular/router';
import type { FacebookGroupFacade } from '../facade/facebook-group.facade';
import type { IConnection } from 'src/app/core/model';

@Component({
  selector: 'buffer-facebook-group',
  styleUrls: ['./facebook-group.component.css'],
  templateUrl: './facebook-group.component.html'
})
export class FacebookGroupComponent implements OnDestroy {
  private subscription$ = new Subscription();
  public connections$: Observable<IConnection[]>;
  public is_platform_handset$: Observable<boolean>;
  public is_platform_tablet$: Observable<boolean>;
  public is_platform_web$: Observable<boolean>;

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookGroupFacade) {
    this.is_platform_handset$ = this.facade.isHandset();
    this.is_platform_tablet$ = this.facade.isTablet();
    this.is_platform_web$ = this.facade.isWeb();

    this.connections$ = this.facade.getGroups(this.activatedRoute.queryParamMap, 'facebook-group');
  }

  public addGroup (group_info: IConnection): void {
    this.subscription$.add(this.facade.addGroup(group_info).subscribe(() => this.facade.navigateToGroup('connection/profiles')));
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public trackBy (_index: number, connection: IConnection): number {
    return Number(connection.connection_id);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    this.subscription$.unsubscribe();
  }
}
