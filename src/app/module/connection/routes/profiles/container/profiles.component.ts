import { Component, OnInit } from '@angular/core';
import { I_CONNECTION } from 'src/app/core/model';
import { Observable, of } from 'rxjs';
import { PAGES } from 'src/app/core/constant';
import { ProfilesFacade } from '../facade/profiles.facade';

@Component({
  selector: 'buffer--profiles',
  styleUrls: ['./profiles.component.css'],
  templateUrl: './profiles.component.html',
})
export class ProfilesComponent implements OnInit {
  chooseConnectionPage = `${PAGES.CONNECTION_MODULE.PAGE_ROUTE}/${PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_CHOOSE_PAGE.PAGE_ROUTE}`;

  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  connections$: Observable<I_CONNECTION[]> = of([]);
  loading$: Observable<boolean>;
  totalConnections$: Observable<number>;

  constructor(private readonly facade: ProfilesFacade) {
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();
  }

  ngOnInit(): void {
    this.getConnections();
  }

  private getConnections(): void {
    this.connections$ = this.facade.getConnectionsFromState();
    this.loading$ = this.facade.getLoadingState();
    this.totalConnections$ = this.facade.getTotalConnections();
  }

  trackByConnectionID(connection: I_CONNECTION): string {
    return connection.id;
  }

  connectionSelect(connection: I_CONNECTION): void {
    this.facade.navigate(['/schedule', connection.id]);
  }

  deleteConnection(connection: I_CONNECTION): void {
    this.facade.deleteConnection(connection);
  }

  navigate(pageToNavigate: string[]): void {
    this.facade.navigate(pageToNavigate);
  }

  getConnectionType(connectionType: string): string {
    return connectionType.split('_').join(' ');
  }
}
