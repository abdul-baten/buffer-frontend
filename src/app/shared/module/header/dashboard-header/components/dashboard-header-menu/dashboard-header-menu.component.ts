import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'buffer--dashboard-header-menu',
  styleUrls: ['./dashboard-header-menu.component.scss'],
  templateUrl: './dashboard-header-menu.component.html',
})
export class DashboardHeaderMenuComponent implements OnInit {
  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-microsoft',
        routerLink: ['/dashboard'],
        routerLinkActiveOptions: { exact: true },
      },
      { label: 'Schedule', icon: 'pi pi-fw pi-clock', routerLink: ['/schedule/5f48cb3f89abf5047ac20364'] },
      { label: 'Connections', icon: 'pi pi-fw pi-sitemap', routerLink: ['/connection'] },
      { label: 'Bucket', icon: 'pi pi-fw pi-inbox', routerLink: ['/bucket'] },
      { label: 'Conversation', icon: 'pi pi-fw pi-comments', routerLink: ['/message'], routerLinkActiveOptions: { exact: true } },
      {
        label: 'Insights',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: ['/analyze'],
      },
    ];
  }
}
