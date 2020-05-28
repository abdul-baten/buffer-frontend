import { AppState } from 'src/app/reducers';
import { ConnectionDeleteModalComponent } from '@shared/module/modal/connection-delete-modal/container/connection-delete-modal.component';
import { I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { Router } from '@angular/router';
import { selectAllConnection } from 'src/app/selectors/connection.selector';
import { Store } from '@ngrx/store';

@Injectable()
export class ProfilesFacade {
  constructor(
    private readonly matDialog: MatDialog,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly router: Router,
    private readonly store: Store<AppState>,
  ) {}

  getConnectionsFromState(): Observable<I_CONNECTION[]> {
    return this.store.select(selectAllConnection);
  }

  deleteConnection(connection: I_CONNECTION): void {
    this.matDialog.open(ConnectionDeleteModalComponent, {
      data: connection,
      autoFocus: false,
      width: '500px',
    });
  }

  navigateToPage(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  isTablet(): Observable<boolean> {
    return this.responsiveLayoutService.isTablet();
  }
}
