import { Component, OnInit } from '@angular/core';
import { IConnection } from 'src/app/core/model';
import { Observable, of } from 'rxjs';
import { ProfilesFacade } from '../facade/profiles.facade';

@Component({
  selector: 'buffer-profiles',
  styleUrls: ['./profiles.component.css'],
  templateUrl: './profiles.component.html'
})
export class ProfilesComponent implements OnInit {
  public choose_connection_route = 'connection/choose';
  public connections$: Observable<IConnection[]> = of([]);
  public total_connections$: Observable<number> = of(0);

  constructor (private readonly facade: ProfilesFacade) {
  }

  ngOnInit (): void {
    this.getConnections();
  }

  private getConnections (): void {
    this.connections$ = this.facade.getConnectionsFromState();
    this.total_connections$ = this.facade.getTotalConnections();
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public trackByConnectionID (_index: number, connection: IConnection): number {
    return Number(connection.id);
  }

  public connectionSelect (connection: IConnection): void {
    this.navigate(['/schedule', connection.id]);
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
