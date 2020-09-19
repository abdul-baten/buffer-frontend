import format from 'date-fns/format';
import { AppState } from 'src/app/reducers';
import { ConnectionService } from '@core/service/connection/connection.service';
import { DashboardHeaderService } from '../service/dashboard-header.service';
import { I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ModalService } from '@core/service/modal/modal.service';
import { Observable } from 'rxjs';
import { removeNewPostData } from 'src/app/actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class DashboardHeaderFacade {
  constructor(
    private dashboardHeaderService: DashboardHeaderService,
    private connectionService: ConnectionService,
    private readonly modalService: ModalService,
    private store: Store<AppState>,
    private router: Router,
  ) {}

  getFirstConnection(): Observable<{ id: string; type: string }> {
    return this.connectionService.getFirstConnection().pipe(
      map((connection: I_CONNECTION) => {
        const { id, connectionType } = connection;
        const type = connectionType.split('_')[0].toLowerCase();

        return { id, type };
      }),
    );
  }

  logoutUser(): void {
    this.dashboardHeaderService.logoutUser().subscribe(() => location.reload());
  }

  handleAddPostBtnClick(postScheduleDateTime: Date): void {
    const dialogRef = this.modalService.openPostModal('Create Post', {
      postScheduleDateTime: format(new Date(postScheduleDateTime), `yyyy-MM-dd'T'HH:mm:ssxxx`),
    });

    dialogRef.onDestroy.subscribe(() => {
      this.store.dispatch(removeNewPostData());
    });
  }

  navigate(route: [string]): void {
    this.router.navigate(route);
  }
}
