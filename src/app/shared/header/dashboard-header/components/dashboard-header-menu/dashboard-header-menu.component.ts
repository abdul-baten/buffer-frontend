import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import type { DashboardHeaderFacade } from '../../facade/dashboard-header.facade';
import type { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'buffer-dashboard-header-menu',
  styleUrls: ['./dashboard-header-menu.component.css'],
  templateUrl: './dashboard-header-menu.component.html'
})
export class DashboardHeaderMenuComponent implements OnInit, OnDestroy {
  menu_items: MenuItem[] = [];
  private subscription$ = new Subscription();

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
          routerLink: ['analyze', type, id],
          routerLinkActiveOptions: { exact: false } }
      ];
    }));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    this.subscription$.unsubscribe();
  }

  clicked (route: [string]): void {
    // This.facade.replaceRoute(route.join('/'));
    this.facade.navigate(route);
  }

  trackBy (index: number): number {
    return index;
  }
}
