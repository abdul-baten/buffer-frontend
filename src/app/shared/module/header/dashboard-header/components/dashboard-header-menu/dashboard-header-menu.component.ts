import { Component, OnInit } from '@angular/core';
import { DashboardHeaderFacade } from '../../facade/dashboard-header.facade';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'buffer--dashboard-header-menu',
  styleUrls: ['./dashboard-header-menu.component.scss'],
  templateUrl: './dashboard-header-menu.component.html',
})
export class DashboardHeaderMenuComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(private facade: DashboardHeaderFacade) {}

  ngOnInit() {
    this.facade.getFirstConnection().subscribe((connection: { id: string; type: string }) => {
      const { id, type } = connection;
      this.menuItems = [
        {
          icon: 'pi pi-fw pi-th-large',
          label: 'Dashboard',
          routerLink: ['/dashboard'],
          routerLinkActiveOptions: { exact: true },
        },
        { icon: 'pi pi-fw pi-calendar', label: 'Schedule', routerLink: ['/schedule', id], routerLinkActiveOptions: { exact: false } },
        { icon: 'pi pi-fw pi-sitemap', label: 'Connections', routerLink: ['/connection'], routerLinkActiveOptions: { exact: false } },
        { icon: 'pi pi-fw pi-inbox', label: 'Bucket', routerLink: ['/bucket'], routerLinkActiveOptions: { exact: false } },
        { icon: 'pi pi-fw pi-comments', label: 'Conversation', routerLink: ['/message'], routerLinkActiveOptions: { exact: true }, visible: false },
        { icon: 'pi pi-fw pi-chart-line', label: 'Insights', routerLink: ['analyze', type, id], routerLinkActiveOptions: { exact: false } },
      ];
    });
  }

  clicked(route: [string]): void {
    this.facade.navigate(route);
  }
}
