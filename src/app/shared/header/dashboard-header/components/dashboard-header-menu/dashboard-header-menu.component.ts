import {
  Component,
  HostListener,
  OnDestroy,
  OnInit
} from '@angular/core';
import { DashboardHeaderFacade } from '../../facade/dashboard-header.facade';
import { EFbInsightType } from 'src/app/core/enum';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'buffer-dashboard-header-menu',
  styleUrls: ['./dashboard-header-menu.component.css'],
  templateUrl: './dashboard-header-menu.component.html'
})
export class DashboardHeaderMenuComponent implements OnInit, OnDestroy {
  private subscription$ = new Subscription();
  public menu_items: MenuItem[] = [];

  constructor (private readonly facade: DashboardHeaderFacade) {}

  ngOnInit (): void {
    this.subscription$.add(this.facade.getFirstConnection().subscribe((connection: { id: string; type: string }) => {
      const { id, type } = connection;

      this.menu_items = [
        {
          icon: 'pi pi-fw pi-th-large',
          label: 'Dashboard',
          routerLink: ['/dashboard'],
          routerLinkActiveOptions: { exact: true }
        },
        { icon: 'pi pi-fw pi-calendar',
          label: 'Schedule',
          routerLink: ['/schedule', id],
          routerLinkActiveOptions: { exact: false } },
        { icon: 'pi pi-fw pi-sitemap',
          label: 'Connections',
          routerLink: ['/connection'],
          routerLinkActiveOptions: { exact: false } },
        { icon: 'pi pi-fw pi-inbox',
          label: 'Bucket',
          routerLink: ['/bucket'],
          routerLinkActiveOptions: { exact: false } },
        { icon: 'pi pi-fw pi-comments',
          label: 'Conversation',
          routerLink: ['/message'],
          routerLinkActiveOptions: { exact: true },
          visible: false },
        { icon: 'pi pi-fw pi-chart-line',
          label: 'Insights',
          routerLink: [type, EFbInsightType.OVERVIEW, id],
          routerLinkActiveOptions: { exact: false } }
      ];
    }));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  public clicked (route: [string]): void {
    this.facade.navigate(route);
  }

  public trackBy (index: number): number {
    return index;
  }
}
