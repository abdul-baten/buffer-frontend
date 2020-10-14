import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IConnection } from 'src/app/core/model';
import { ProfilesFacade } from '../facade/profiles.facade';

@Component({
  selector: 'buffer-profiles',
  styleUrls: ['./profiles.component.css'],
  templateUrl: './profiles.component.html'
})
export class ProfilesComponent implements OnInit {
  public choose_connection_route = 'connection/choose';
  public connections$: Observable<IConnection[]> = of([]);
  public is_platform_tablet$: Observable<boolean>;
  public is_platform_web$: Observable<boolean>;
  public total_connections$: Observable<number> = of(0);

  constructor (private readonly facade: ProfilesFacade) {
    this.is_platform_tablet$ = this.facade.isTablet();
    this.is_platform_web$ = this.facade.isWeb();
  }

  ngOnInit (): void {
    this.getConnections();
  }

  private getConnections (): void {
    this.connections$ = this.facade.getConnectionsFromState();
    this.total_connections$ = this.facade.getTotalConnections();
  }

  public trackByConnectionID (connection: IConnection): string {
    return connection.id;
  }

  public connectionSelect (connection: IConnection): void {
    this.facade.navigate(['/schedule', connection.id]);
  }

  public deleteConnection (connection: IConnection): void {
    this.facade.deleteConnection(connection);
  }

  public navigate (route: string[]): void {
    this.facade.navigate(route);
  }

  public getConnectionType (connection_type: string): string {
    return connection_type.split('_').join(' ');
  }
}
