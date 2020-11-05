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
          icon: 'ico-md ico-layout',
          label: 'Dashboard',
          routerLink: ['/dashboard'],
          routerLinkActiveOptions: { exact: true }
        },
        { icon: 'ico-lg ico-meeting-add',
          label: 'Schedule',
          routerLink: ['/schedule', id],
          routerLinkActiveOptions: { exact: false } },
        { icon: 'ico-md ico-thunder-light',
          label: 'Connections',
          routerLink: ['/connection'],
          routerLinkActiveOptions: { exact: false } },
        { icon: 'ico-md ico-bucket',
          label: 'Bucket',
          routerLink: ['/bucket'],
          routerLinkActiveOptions: { exact: false } },
        { icon: 'pi pi-fw pi-comments',
          label: 'Conversation',
          routerLink: ['/message'],
          routerLinkActiveOptions: { exact: true },
          visible: false },
        { icon: 'ico-lg ico-sound-wave',
          label: 'Insights',
          routerLink: [type, EFbInsightType.OVERVIEW, id],
          routerLinkActiveOptions: { exact: false }
        }
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
