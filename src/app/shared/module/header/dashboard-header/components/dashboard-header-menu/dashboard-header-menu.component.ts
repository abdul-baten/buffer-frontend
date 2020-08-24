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
      { label: 'Dashboard', icon: 'pi pi-fw pi-microsoft', routerLink: ['/dashboard'], routerLinkActiveOptions: { exact: true } },
      { label: 'Schedule', icon: 'pi pi-fw pi-clock', routerLink: ['/schedule'] },
      { label: 'Bucket', icon: 'pi pi-fw pi-refresh', routerLink: ['/bucket'] },
      { label: 'Conversation', icon: 'pi pi-fw pi-comments', routerLink: ['/message'] },
      { label: 'Analytics', icon: 'pi pi-fw pi-chart-line', routerLink: ['/analyze'] },
    ];
  }
}
