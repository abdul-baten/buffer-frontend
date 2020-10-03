import { Component, OnInit } from '@angular/core';
import { I_CONNECTION } from 'src/app/core/model';
import { Observable, of } from 'rxjs';
import { ProfilesFacade } from '../facade/profiles.facade';

@Component({
  selector: 'buffer--profiles',
  styleUrls: ['./profiles.component.css'],
  templateUrl: './profiles.component.html',
})
export class ProfilesComponent implements OnInit {
  chooseConnectionPage = 'connection/choose';

  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  connections$: Observable<I_CONNECTION[]> = of([]);
  totalConnections$: Observable<number> = of(0);

  constructor(private readonly facade: ProfilesFacade) {
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();
  }

  ngOnInit(): void {
    this.getConnections();
  }

  private getConnections(): void {
    this.connections$ = this.facade.getConnectionsFromState();
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
